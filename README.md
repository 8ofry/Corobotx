# CorobotX — Marketing Site

Precision-engineered marketing site for **CorobotX**, a MENA-region industrial automation system integrator specializing in robotics, automation, EMS, and BMS solutions. Built with Astro + Tailwind.

---

## Stack

| Layer         | Choice                                              |
| ------------- | --------------------------------------------------- |
| Framework     | [Astro 4](https://astro.build/) — HTML-first, zero-JS by default |
| Styling       | [Tailwind CSS 3](https://tailwindcss.com/) with a custom industrial theme |
| Typography    | Space Grotesk (Google Fonts)                        |
| Icons         | Material Symbols Outlined (Google Fonts variable)   |
| Sitemap       | `@astrojs/sitemap` (auto-generated at build)        |
| Deploy ready  | Netlify (`netlify.toml`) and Vercel (`vercel.json`) |

---

## Commands

```bash
npm install         # install dependencies
npm run dev         # start dev server at http://localhost:4321
npm run build       # produce production build in ./dist
npm run preview     # serve the built site locally
```

---

## Structure

```
src/
  layouts/
    Layout.astro          # <head>, nav, footer, SEO, JSON-LD org schema
  components/
    Nav.astro             # fixed header with mobile menu
    Footer.astro          # 4-column footer + status strip
    SectionHeader.astro   # reusable eyebrow + title + subtitle
  pages/
    index.astro           # Home
    solutions.astro       # Robotics · Automation · EMS · BMS
    partners.astro        # Partners + Industries (anchor #industries)
    about.astro           # Vision · Mission · Methodology · Contact (#contact, #methodology)
    privacy.astro
    terms.astro
    404.astro
  styles/
    global.css            # Tailwind layers + component utilities (scanline, grids, status dot, corner ticks)

public/
  favicon.svg
  og-default.svg          # 1200×630 Open Graph card
  robots.txt
```

---

## Design system

- **Warm content palette** — background `#1a110f`, surface variants in the same family. Evokes heavy industry.
- **Cool chrome palette** — nav + footer in `#0A0E1A` / `#0D1525` / `#1E2A3A`. Reads as a technical HUD framing the content.
- **Accents** — brand orange `#FF4D00` (primary actions, dividers, status) and brand cyan `#00D2FD` (secondary data, callouts).
- **No rounded corners** — every radius is set to `0` except `full` for status dots.
- **Industrial UI tropes** — grid-line backgrounds, monospace data labels (`mono-data`), uppercase `label-caps`, status dots with pulse, `corner-ticks` utility for bracketed cards, coordinate strips, reveal-on-scroll via `IntersectionObserver`.
- **Typography scale** — `headline-xl` (56px), `h1` (48px), `h2` (32px), `h3` (24px), body 16/18, labels 12px with 0.1em tracking.

All tokens live in [`tailwind.config.mjs`](./tailwind.config.mjs). Component utilities live in [`src/styles/global.css`](./src/styles/global.css).

---

## Configuration before deploy

1. **Contact form** — in [`src/pages/about.astro`](./src/pages/about.astro) replace `https://formspree.io/f/YOUR_FORM_ID` with a real endpoint ([Formspree](https://formspree.io/), [Getform](https://getform.io/), or a Netlify form by adding `netlify` attribute and renaming to `data-netlify="true"`).
2. **Site URL** — set the canonical domain in [`astro.config.mjs`](./astro.config.mjs) under `site:` and in [`public/robots.txt`](./public/robots.txt) `Sitemap:` line.
3. **Images** — the hero and card images currently reference external Google LH3 URLs (inherited from the original design mock). Replace with brand photography or CDN-hosted assets under `public/images/` and update references.
4. **Favicons** — `favicon.svg` is provided. Generate `favicon.ico` and `apple-touch-icon.png` from your final logo and drop into `public/`.
5. **OG image** — [`public/og-default.svg`](./public/og-default.svg) is a placeholder. Most platforms prefer PNG — export at 1200×630.
6. **Partner attribution** — confirm that use of Shibaura Machine and OTC DAIHEN marks is authorized under your partner agreements.

---

## Deploy

### Netlify

```bash
# one-time
npm install -g netlify-cli
netlify login
netlify init
# or connect the git repo via the Netlify UI
```

The included [`netlify.toml`](./netlify.toml) handles build command, Node version, security headers, and redirects.

### Vercel

```bash
npm install -g vercel
vercel
# then
vercel --prod
```

The included [`vercel.json`](./vercel.json) wires the Astro framework preset, security headers, and redirects.

### Static host (any)

```bash
npm run build
# upload ./dist to S3/CloudFront, GitHub Pages, Cloudflare Pages, etc.
```

---

## Roadmap

- [ ] Case studies page (`/case-studies`) with real deployment metrics
- [ ] Careers page
- [ ] Blog (MDX via `@astrojs/mdx`)
- [ ] Multi-language (EN/AR) via `@astrojs/i18n`
- [ ] Replace placeholder images with brand photography
- [ ] Wire actual form endpoint + email notifications
- [ ] Add analytics (Plausible / Fathom recommended for privacy)

---

© 2026 CorobotX Industrial Automation. Precision Engineered.
