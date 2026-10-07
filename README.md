# Noodle Nook — ramen landing page

A one-page website for Noodle Nook, a ramen shop, built from Carissa Mae Cabading's Figma design.
Plain HTML, CSS and a little JavaScript: no installs, no build step.

## Open it

Double-click `index.html`, or run a local server:

```bash
npx serve .
```

## What's on the page

- **Hero** with the featured bowl. The arrows (or the small card in the corner) cycle through bowls
- **Scrolling strip**: "Ramen that hits different • Your new noodle obsession • Bowls made for sharing"
- **About**: "Prepare to fall for ramen"
- **Look inside / The good stuff** split section
- **Menu**: four bowls. The **+** button adds a bowl to the order count on the bag icon
- **Reviews** with arrows
- **Footer** with links and the big Noodle Nook wordmark

Works on phones, tablets and desktop.

## Where to change things

| I want to change… | Edit this |
|---|---|
| Colors | `styles.css`, the lines at the very top (`--maroon`, `--yellow`, `--cream`) |
| Fonts | `index.html` (the Google Fonts link) and `styles.css` (`--font-display`, `--font-body`) |
| Menu bowls, prices, descriptions | `index.html`, the `MENU` section |
| Bowls in the hero | `script.js`, the `featured` list at the top |
| Reviews | `script.js`, the `reviews` list. Two are placeholders, swap in real ones |
| Photos | Replace the file in `assets/` with one of the same name |

## Fonts

- **Bebas Neue**: headings
- **Anton**: the footer wordmark
- **Montserrat**: body text
