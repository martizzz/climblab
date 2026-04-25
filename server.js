const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 4173;
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;
const VODS_DIR = path.join(ROOT, "vods");
const VODS_INDEX = path.join(VODS_DIR, "index.json");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

ensureVodStorage();

http
  .createServer((req, res) => {
    if (req.method === "POST" && req.url === "/api/vods") {
      collectJsonBody(req, res, async (payload) => {
        try {
          const published = await publishVod(payload);
          writeJson(res, 200, published);
        } catch (error) {
          writeJson(res, 500, { error: "publish_failed" });
        }
      });
      return;
    }

    if (req.method === "GET" && req.url?.startsWith("/api/vods/")) {
      const code = decodeURIComponent(req.url.replace("/api/vods/", "")).trim().toUpperCase();
      serveVodByCode(res, code);
      return;
    }

    const requestedPath = req.url === "/" ? "/index.html" : req.url || "/index.html";
    const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
    const filePath = path.join(ROOT, safePath);

    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, contents) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }

      const extension = path.extname(filePath);
      res.writeHead(200, {
        "Content-Type": MIME_TYPES[extension] || "text/plain; charset=utf-8",
      });
      res.end(contents);
    });
  })
  .listen(PORT, HOST, () => {
    console.log(`ClimbLab disponible en http://${HOST}:${PORT}`);
  });

function ensureVodStorage() {
  fs.mkdirSync(VODS_DIR, { recursive: true });
  if (!fs.existsSync(VODS_INDEX)) {
    fs.writeFileSync(VODS_INDEX, JSON.stringify({ items: [] }, null, 2));
  }
}

function collectJsonBody(req, res, callback) {
  let raw = "";
  req.on("data", (chunk) => {
    raw += chunk;
  });
  req.on("end", () => {
    try {
      const parsed = raw ? JSON.parse(raw) : {};
      callback(parsed);
    } catch (error) {
      writeJson(res, 400, { error: "invalid_json" });
    }
  });
}

function writeJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload, null, 2));
}

async function publishVod(payload) {
  ensureVodStorage();
  const code = sanitizeCode(payload.code) || generateCode();
  const publishedAt = payload.publishedAt || new Date().toISOString();
  const normalized = {
    code,
    title: payload.title || "Sesion sin nombre",
    summary: payload.summary || {},
    video: payload.video || {},
    notes: Array.isArray(payload.notes) ? payload.notes : [],
    publishedAt,
    schemaVersion: payload.schemaVersion || 1,
  };

  const vodFile = path.join(VODS_DIR, `${code}.json`);
  fs.writeFileSync(vodFile, JSON.stringify(normalized, null, 2));

  const index = JSON.parse(fs.readFileSync(VODS_INDEX, "utf8"));
  const nextItem = {
    code,
    title: normalized.title,
    publishedAt,
    sessionName: normalized.summary.sessionName || "",
    champion: normalized.summary.champion || "",
    youtubeUrl: normalized.video.youtubeUrl || "",
    noteCount: normalized.notes.length,
    file: `./vods/${code}.json`,
  };

  const existingIndex = index.items.findIndex((item) => item.code === code);
  if (existingIndex >= 0) {
    index.items[existingIndex] = nextItem;
  } else {
    index.items.unshift(nextItem);
  }
  fs.writeFileSync(VODS_INDEX, JSON.stringify(index, null, 2));

  return {
    code,
    publishedAt,
    file: `./vods/${code}.json`,
  };
}

function serveVodByCode(res, code) {
  if (!code) {
    writeJson(res, 400, { error: "missing_code" });
    return;
  }

  const vodFile = path.join(VODS_DIR, `${sanitizeCode(code)}.json`);
  if (!fs.existsSync(vodFile)) {
    writeJson(res, 404, { error: "vod_not_found" });
    return;
  }

  const contents = JSON.parse(fs.readFileSync(vodFile, "utf8"));
  writeJson(res, 200, contents);
}

function sanitizeCode(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9-]/g, "")
    .trim();
}

function generateCode() {
  const letters = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `VOD-${letters}`;
}
