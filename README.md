**[Open the web app](https://content-roulette.vercel.app)** · **[Get the Figma plugin](https://www.figma.com/community/plugin/1603319090043870718/content-roulette)**

# 🎲 Content Roulette

**Stop Lorem'ing your Ipsum.**

A mock data generator for anyone who's tired of testing with "Jane Doe" and fake@email.com, because I got tired of copy-pasting like it's 2012.

---

## What it does

Generates realistic-looking mock data so your designs don't look like they were filled out by a robot (ironic, I know). 29 generators across six categories, and clicking any result copies it to your clipboard:

- 👤 **People & Contact** — full names, job titles, fun job titles, usernames, personal and work emails, phone numbers, addresses
- 🏢 **Business & Apps** — organization names, app names, status labels, URLs
- 💻 **Laptops & Assets** — Mac and Windows device names, asset names, serial numbers, UPS and FedEx tracking
- 📅 **Dates & Times** — four date formats (`MM/DD/YYYY`, `MM/DD/YY`, `Jan 1, 2026`, `January 1, 2026`) and times
- 💳 **Payment & Numbers** — credit cards, USD amounts, percentages
- 🌐 **Network** — IPv4, IPv6, and MAC addresses

Need more than one? The **Bulk Generator** spits out any type in whatever quantity you ask for, ready to paste as a list. There's also a dark/light toggle that remembers what you picked.

## Use it

**Web app** → [content-roulette.vercel.app](https://content-roulette.vercel.app) — also mirrored at [tiffler.github.io/content-roulette](https://tiffler.github.io/content-roulette/). Or clone the repo and run `npm install && npm run dev` locally. No account, no signup, no existential crisis (that's sold separately)

**Figma plugin** → [Content Roulette on Figma Community](https://www.figma.com/community/plugin/1603319090043870718/content-roulette)

---

## Stack

React 18 + Vite 5, styled with Tailwind CSS 3 — where [Open Props](https://open-props.style) supplies the values behind the theme scales, wired up through `postcss-jit-props`. Icons are [Phosphor](https://phosphoricons.com). The generator data lives in a single `data.js`, so adding new content means editing one file, not hunting through components.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

Deploys to two places from the same source: **Vercel** at the domain root, and **GitHub Pages** under `/content-roulette/` via GitHub Actions. Vite's `base` is set per host in `vite.config.js` — Vercel sets `VERCEL=1` during its builds, which is how the right path gets picked.

---

_Built by [tiffler](https://www.tienmedia.com) and her AI sidekick [Clawde](https://claude.com/product/claude-code)_
