# ClimbLab

ClimbLab es un MVP de coaching para League of Legends pensado para revisar partidas con vídeo, notas contextualizadas y navegación rápida por momentos clave.

## Qué incluye

* Vídeo principal embebido desde YouTube
* Notas con timestamp, título, categoría, subcategoría y descripción
* Timeline interactiva para saltar a momentos concretos
* Resumen de sesión con campeón, rol, matchup, elo y nombre de sesión
* Filtros por tipo de nota
* Persistencia local en navegador para la demo

## Stack actual

* HTML, CSS y JavaScript vanilla
* YouTube Iframe API
* `localStorage`
* Servidor local mínimo con Node.js para pruebas

## Estructura

```text
ClimbLab/
├── index.html
├── champions.js
├── server.js
├── package.json
├── README.md
└── GUIA_RAPIDA.md
```

## Ejecutar en local

La forma recomendada para testear es servir el proyecto por `http`, no abrirlo por `file://`.

```bash
cd /Users/martidc/Documents/ClimbLab
npm run serve
```

Luego abre:

```text
http://127.0.0.1:4173
```

## Importante sobre YouTube

Si abres `index.html` con `file://`, YouTube puede devolver error `153` y bloquear el embed. Por eso para pruebas reales conviene usar el servidor local o desplegar la app en un hosting estático.

Además, algunos vídeos seguirán fallando en cualquier entorno si su propietario ha desactivado los embeds en YouTube.

## Despliegue gratuito

### GitHub Pages

Este proyecto es compatible con GitHub Pages.

Puntos clave:

* `champions.js` ya se carga con ruta relativa `./champions.js`
* No necesitas `server.js` en producción
* El sitio debe servirse por `https`

Pasos generales:

1. Sube el proyecto a un repositorio en GitHub
2. Ve a `Settings > Pages`
3. En `Build and deployment`, elige `Deploy from a branch`
4. Selecciona `main` y `/root`
5. Guarda

Tu URL quedará en un formato parecido a:

```text
https://tuusuario.github.io/climblab/
```

### Firebase Hosting

También puedes desplegarlo gratis en Firebase Hosting.

Pasos típicos:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Estado actual del MVP

* Demo limpia sin notas precargadas
* Catálogo local de campeones para que Campeón y Matchup funcionen sin depender de red
* Ajustes de sesión con desplegables y búsqueda
* El panel de contexto puede plegarse al guardar

## Limitaciones

* No hay backend ni autenticación
* No hay sincronización entre dispositivos
* No hay colaboración en tiempo real
* Las notas no se guardan en una base de datos

## Siguientes pasos razonables

* Guardado remoto de reviews
* Compartir sesiones entre coach y jugador
* Exportar notas
* Gestión de múltiples partidas por usuario
