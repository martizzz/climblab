# ClimbLab

ClimbLab es una web-app MVP para coaching de League of Legends que permite analizar partidas mediante vídeo, crear notas contextualizadas y navegar rápidamente por los momentos clave.

---

## Objetivo

Facilitar sesiones de coaching más estructuradas entre jugador y coach, centrando la revisión en:

* Decisiones clave dentro de la partida
* Errores y aciertos contextualizados
* Navegación rápida por momentos relevantes

---

## Funcionalidades principales

### Vídeo integrado

* Soporte para vídeos de YouTube
* Reproducción embebida
* Sincronización con la timeline

### Sistema de notas

Cada nota incluye:

* Timestamp
* Título
* Categoría (Error, Acierto, Duda, Highlight)
* Subcategoría (ej: laning, macro)
* Descripción

### Timeline interactiva

* Marcadores visuales en momentos clave
* Navegación rápida al hacer click
* Sincronización con el vídeo

### Contexto de sesión

* Campeón
* Rol
* Matchup
* Elo
* Nombre de la sesión

### Filtros

* Filtrado por tipo de nota
* Conteo dinámico

---

## Tecnologías

* HTML / CSS / JavaScript (vanilla)
* YouTube Iframe API
* LocalStorage (persistencia local)
* Tailwind CSS (en versión React)

---

## Estructura del proyecto

```
climblab/
├── index.html
├── champions.js
├── server.js
├── package.json
├── tailwind.config.js
└── README.md
```

---

## Uso

### Opción 1: Sin instalación

1. Abrir `index.html` en el navegador
2. Añadir un enlace de YouTube
3. Crear notas sobre la partida

### Opción 2: Servidor local

```bash
npm install
npm run serve
```

Abrir en:

```
http://127.0.0.1:4173
```

---

## Limitaciones actuales

* No hay backend
* Las notas se guardan solo en el navegador
* No hay sistema de cuentas
* No se pueden compartir sesiones

---

## Próximos pasos

* Persistencia en base de datos
* Compartir sesiones
* Colaboración en tiempo real
* Exportación de notas
* Clips virtuales

---

## Concepto

ClimbLab no almacena vídeos.

Se basa en un modelo híbrido:

* Vídeo externo (YouTube)
* Notas y análisis en la plataforma

Esto permite reducir costes, escalar fácilmente y centrarse en el valor del coaching.

---

## Licencia

Uso libre para desarrollo y experimentación.
