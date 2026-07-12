# aldoturegano.com

Personal website of **Aldo Turégano Montes** — Senior Data &amp; AI Leader based in Madrid
(Fever · ex-Amazon, Audible &amp; P&G).

Static site (HTML + CSS + JS, no build step) hosted on **GitHub Pages** at
[aldoturegano.com](https://aldoturegano.com). Minimalist design inspired by
[tomasmaillo.com](https://tomasmaillo.com): centered column, editorial serif (Fraunces) +
Inter, orange accent, light/dark theme and staggered reveal animations.

## Structure

| File         | Description                                          |
| ------------ | ---------------------------------------------------- |
| `index.html` | Content and structure                                |
| `styles.css` | Styles, color tokens and themes (light/dark)         |
| `script.js`  | Theme toggle, dynamic year and interactions          |
| `CNAME`      | Custom domain for GitHub Pages                        |

## Sections

Hero + bio · Experience (Fever, Amazon, Audible, P&G) · Ventures (EasyDesk) ·
Education · Toolbox · Languages · Contact.

## Personalize

- **Profile photo:** replace the `div.avatar` with
  `<img class="avatar" src="assets/aldo.jpg" alt="Aldo Turégano" />`.
- **Links:** email, LinkedIn, GitHub and EasyDesk are all live in the socials row.
- **Content:** experience, education, toolbox and languages come from the CV; edit any
  card or `.tag` to adjust.

## Local development

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
