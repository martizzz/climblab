# ClimbLab - Guía Rápida

## Cómo probar la app

La forma correcta de testearla es con servidor local:

```bash
cd /Users/martidc/Documents/ClimbLab
npm run serve
```

Abre después:

```text
http://127.0.0.1:4173
```

## No uses `file://` para probar YouTube

Si abres `index.html` directamente en el navegador, YouTube puede devolver error `153` y no cargar el vídeo.

Para evitarlo:

* usa `npm run serve` en local
* o despliega la app en GitHub Pages / Firebase

## Flujo de uso

1. Completa el resumen de sesión
2. Pulsa `Guardar contexto`
3. Carga un vídeo de YouTube que permita embeds
4. Añade notas desde el tiempo actual del vídeo
5. Usa la timeline y los filtros para revisar la partida

## Qué puedes configurar en Resumen de sesión

* Campeón: buscable con lista completa de campeones
* Rol: `Top`, `Jungle`, `Mid`, `Adc`, `Support`
* Matchup: buscable con lista completa de campeones
* Elo: desde `Iron IV` hasta `Challenger`
* Sesión: nombre libre

## Qué incluye cada nota

* Categoría
* Timestamp
* Título
* Subcategoría
* Descripción

## Si el vídeo no carga

Puede pasar por dos motivos:

* Estás usando `file://`
* El dueño del vídeo ha desactivado el embed en YouTube

## Archivos importantes

```text
index.html      -> app principal
champions.js    -> lista local de campeones
server.js       -> servidor local para test
package.json    -> scripts del proyecto
```

## Preparado para GitHub Pages

El proyecto ya está ajustado para poder desplegarse como sitio estático, incluyendo la carga relativa de `champions.js`.
