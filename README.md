# aldoturegano.com

Sitio personal de **Aldo Turégano Montes** — Fundador y CEO de [EasyDesk](https://easydesk.mx).

Sitio estático (HTML + CSS + JS, sin build) alojado en **GitHub Pages** sobre el dominio
[aldoturegano.com](https://aldoturegano.com). Diseño inspirado en la estética minimalista de
[tomasmaillo.com](https://tomasmaillo.com): columna centrada, tipografía editorial (Fraunces) +
Inter, acento naranja, modo claro/oscuro y animaciones de aparición.

## Estructura

| Archivo        | Descripción                                             |
| -------------- | ------------------------------------------------------- |
| `index.html`   | Contenido y estructura de la página                     |
| `styles.css`   | Estilos, tokens de color y temas (claro/oscuro)         |
| `script.js`    | Toggle de tema, año dinámico e interacciones            |
| `CNAME`        | Dominio personalizado de GitHub Pages                   |

## Cómo personalizar

Busca los comentarios `TODO` y `data-placeholder` en `index.html`:

- **Foto de perfil:** sustituye el `div.avatar` por `<img class="avatar" src="assets/aldo.jpg" alt="Aldo Turégano" />`.
- **Redes:** cambia los `href="#"` de LinkedIn y X por tus URLs reales.
- **Proyectos y escritos:** las tarjetas de esa sección son plantillas de ejemplo;
  edítalas o elimínalas y duplica una `<a class="card">` para añadir más.

## Desarrollo local

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```
