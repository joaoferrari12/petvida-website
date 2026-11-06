# Pet Vida

A responsive, seven-page website for a veterinary clinic in Salvador, Brazil — built with plain HTML, CSS and JavaScript (no frameworks, no build step).

**Live:** https://joaoferrari12.github.io/petvida-website/

> Portfolio project. The clinic, team and prices are fictional.

## Version 2.0 (November 2026)

A full redesign of the 2024 version, which was a first-year lab exercise:

- **Design system in CSS custom properties** — one palette, one type scale (Plus Jakarta Sans), one spacing rhythm, shared across every page.
- **Mobile-first layout** — single column on phones, grid on desktop, no horizontal scroll at any width.
- **Accessibility** — semantic landmarks, skip link, keyboard-operable menu with `aria-expanded`, labelled form fields with inline validation and live-region feedback, visible focus styles, 4.5:1 contrast, `prefers-reduced-motion` respected. Audited with axe-core: 0 violations on all 7 pages, desktop and mobile.
- **SEO and sharing** — per-page title, description, canonical and Open Graph tags; SVG favicon.
- **Performance** — WebP images with intrinsic dimensions (no layout shift), lazy loading below the fold, `fetchpriority` on the hero image, fonts preconnected.
- **Interaction, in vanilla JS** — mobile menu, booking form validation with a success state, demo cart counter on the shop pages.

## Pages

Home · Services · About and team · Shop for dogs · Shop for cats · Loyalty plans · Contact

## Running locally

It is a static site — open `index.html`, or serve the folder:

```bash
python3 -m http.server
```

then visit http://localhost:8000

## Structure

```
index.html             home
page-*/index.html      the other six pages
assets/styles/style.css   tokens, base, components, layout (mobile-first)
assets/scripts/main.js    menu, form validation, demo cart
assets/images/            WebP photos (converted from ~18 MB of originals to under 2 MB)
```

## License

MIT — see LICENSE.
