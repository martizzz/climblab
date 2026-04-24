# 🎮 ClimbLab

**ClimbLab** es una web-app MVP para coaching de League of Legends que permite analizar partidas mediante vídeo, crear notas contextualizadas y navegar rápidamente por los momentos clave.

---

## 🚀 Objetivo

Facilitar sesiones de coaching más estructuradas entre jugador y coach, centrando la revisión en:

* Decisiones clave dentro de la partida
* Errores y aciertos contextualizados
* Navegación rápida por momentos relevantes

---

## 🧩 Funcionalidades principales

### 🎥 Vídeo integrado

* Soporte para vídeos de YouTube
* Reproducción embebida
* Sincronización con la timeline

### 📝 Sistema de notas

Cada nota incluye:

* Timestamp
* Título
* Categoría (Error, Acierto, Duda, Highlight)
* Subcategoría (ej: laning, macro...)
* Descripción

### ⏱️ Timeline interactiva

* Marcadores visuales en momentos clave
* Navegación rápida al hacer click
* Sincronización con el vídeo

### 🎯 Contexto de sesión

* Campeón
* Rol
* Matchup
* Elo
* Nombre de la sesión

### 🔍 Filtros

* Filtrado por tipo de nota
* Conteo dinámico

---

## 🛠️ Tecnologías

* HTML / CSS / JavaScript (vanilla)
* YouTube Iframe API
* LocalStorage (persistencia local)
* Tailwind CSS (en versión React)

---

## 📦 Estructura del proyecto

```
📦 climblab/
├── index.html          # MVP principal (standalone)
├── champions.js        # Lista de campeones
├── server.js           # Servidor local opcional
├── package.json        # Scripts y dependencias
├── tailwind.config.js  # Configuración de estilos
└── README.md           # Documentación
```

---

## ▶️ Cómo usar

### Opción 1: Sin instalación

1. Abre `index.html` en tu navegador
2. Añade un enlace de YouTube
3. Empieza a crear notas

### Opción 2: Servidor local (recomendado)

```bash
npm install
npm run serve
```

Abrir en:

```
http://127.0.0.1:4173
```

---

## 🌍 Deploy

### GitHub Pages

1. Subir el proyecto a un repositorio
2. Ir a **Settings > Pages**
3. Seleccionar branch `main` y carpeta `/root`
4. Acceder a:

```
https://tuusuario.github.io/nombre-repo
```

### Alternativas

* Netlify
* Vercel

---

## ⚠️ Limitaciones actuales (MVP)

* No hay backend
* Las notas se guardan solo en el navegador
* No hay sistema de cuentas
* No se pueden compartir sesiones

---

## 🧠 Próximos pasos

* Guardado en base de datos
* Compartir sesiones
* Colaboración en tiempo real
* Exportación de notas
* Clips virtuales

---

## 💡 Concepto clave

ClimbLab no almacena vídeos.

Se basa en un modelo híbrido:

* Vídeo externo (YouTube)
* Notas y análisis en la plataforma

Esto permite:

* Reducir costes
* Escalar fácilmente
* Centrarse en el valor del coaching

---

## 👤 Autor

Proyecto MVP en desarrollo para validación de producto en coaching de League of Legends.

---

## 📄 Licencia

Uso libre para desarrollo y experimentación.
