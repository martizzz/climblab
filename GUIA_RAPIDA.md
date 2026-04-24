# 🚀 ClimbLab - Guía Rápida

## Opción 1: La Más Fácil (Recomendado)

1. Abre el archivo **`index.html`** directamente en tu navegador (Chrome, Firefox, etc.)
2. ¡Listo! No necesitas instalar nada
3. Funciona completamente offline después de la carga inicial

---

## Opción 2: Con Node.js/React (Para Desarrolladores)

Si quieres integrar esto en un proyecto React existente:

```bash
# 1. Instala Node.js si no lo tienes
# https://nodejs.org

# 2. Crea un proyecto React
npx create-react-app climblab
cd climblab

# 3. Instala las dependencias
npm install

# 4. Copia el archivo climblab-youtube.jsx a src/App.jsx

# 5. Instala Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 6. Configura Tailwind en tailwind.config.js
# Asegúrate que incluya: "./src/**/*.{js,jsx,ts,tsx}"

# 7. Agrega a src/index.css:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# 8. Inicia el servidor
npm start
```

---

## 📁 Archivos Incluidos

```
📦 climblab-files/
├── 📄 index.html                # ⭐ ÚSALO PRIMERO (no requiere setup)
├── 📄 climblab-youtube.jsx      # Para integrar en React
├── 📄 package.json              # Dependencias de Node.js
├── 📄 tailwind.config.js        # Configuración de Tailwind
└── 📄 README.md                 # Documentación completa (EN)
```

---

## 🎮 Cómo Usar

### 1️⃣ Cargar un Video
- Pega un link de YouTube
- Formatos aceptados: `youtube.com/watch?v=...` o `youtu.be/...`
- Click en "Load"

### 2️⃣ Agregar Notas
- Click en "Add Note"
- Completa:
  - **Timestamp**: Minuto del video (ej: 1:30)
  - **Title**: Nombre corto de la nota
  - **Category**: Tipo (Mistake/Highlight/Insight/Question/Macro)
  - **Severity**: Importancia (High/Medium/Low)
  - **Description**: Explicación detallada
  - **Notes** (opcional): Contexto adicional

### 3️⃣ Gestionar Notas
- **Click en nota** → Salta a ese momento
- **Hover y X** → Elimina nota
- **Filtros** → Ver solo ciertas categorías
- **Timeline** → Marcadores coloreados por severidad

---

## ❌ Si el Video No Funciona

### Error: "Embedding disabled by video owner"
- **Causa**: El creador del video deshabilitó los embeds en YouTube
- **Solución**: Intenta con otro video o pide al creador que lo habilite

### Error: "Video not found"
- **Causa**: El video es privado o fue eliminado
- **Solución**: Verifica la URL

### Solución Rápida
Prueba con este link (funciona 100%):
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

---

## 💾 Guardar las Notas

**Actualmente**: Las notas se guardan en memoria (se pierden al cerrar)

**Para hacerlas permanentes**, agrega esto al código:

```javascript
// Guardar en navegador
useEffect(() => {
  localStorage.setItem('notes', JSON.stringify(notes));
}, [notes]);

// Cargar al iniciar
useEffect(() => {
  const saved = localStorage.getItem('notes');
  if (saved) setNotes(JSON.parse(saved));
}, []);
```

---

## 🎨 Personalizar Colores

En el código, busca `categories` y `severityColors`:

```javascript
const categories = {
  mistake: { 
    label: 'Mistake', 
    icon: '⚠️', 
    color: '#EF4444',      // ← Rojo (cambiar aquí)
    pastelbg: '#FEE7E7' 
  },
  // ... más categorías
};
```

---

## 📊 Agregar Más Categorías

```javascript
const categories = {
  mistake: { label: 'Mistake', icon: '⚠️', color: '#EF4444', pastelbg: '#FEE7E7' },
  highlight: { label: 'Highlight', icon: '✓', color: '#10B981', pastelbg: '#E7F8F2' },
  // Agrega tu categoría aquí:
  itemSpike: { label: 'Item Spike', icon: '⚡', color: '#FBBF24', pastelbg: '#FEF3C7' },
};
```

---

## 🚀 Desplegar Online

Si quieres compartir tu aplicación:

### Opción A: Netlify (Gratis, Recomendado)
1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra y suelta `index.html`
3. ¡Listo! Tu app está online

### Opción B: GitHub Pages
1. Sube `index.html` a un repositorio
2. Habilita GitHub Pages en Settings
3. Tu URL: `tuusuario.github.io/repo-name`

### Opción C: Vercel
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio
3. Deploy automático

---

## ❓ Preguntas Frecuentes

**P: ¿Funciona sin internet?**
A: Una vez cargado, sí. Pero necesitas internet para cargar videos de YouTube.

**P: ¿Puedo descargar las notas?**
A: Aún no implementado. Puedes agregar con localStorage (ver sección anterior).

**P: ¿Puedo usar en móvil?**
A: Sí, pero la experiencia es mejor en desktop. YouTube puede bloquearlo en móvil.

**P: ¿Puedo compartir mis notas?**
A: Actualmente no hay sistema de compartir. Próxima versión lo incluirá.

---

## 📞 Soporte

- **HTML no abre**: Asegúrate que el archivo sea `.html` (no `.txt`)
- **React no funciona**: Verifica Node.js esté instalado (`node --version`)
- **Video no carga**: Intenta en navegador diferente o con VPN
- **Estilos rotos**: Recarga con `Ctrl+Shift+R` (limpiar caché)

---

## 🎯 Próximas Mejoras Planeadas

- ✅ Exportar notas a PDF
- ✅ Guardar en base de datos
- ✅ Colaboración en tiempo real
- ✅ Dibujar en el video
- ✅ Comparar dos videos
- ✅ App móvil

---

**¡Enjoy! Que gane tu equipo! 🎮🏆**
