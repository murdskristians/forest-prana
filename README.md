# Forest Prana

A single-page catalog shop for Forest Prana (Latvian-language, handmade oximels, vinegars, ointments and other herbal products). It is a React + TypeScript + MUI rebuild of the original Canva site, https://forestprana.my.canva.site/.

There is no backend or payment flow. Visitors browse the catalog and build an order. The order is turned into a pre-filled WhatsApp message to the shop.

## Features

- Product catalog with category filter and search
- Product detail dialog, deep-linkable by hash (`/#piladzu-oximels`). A category hash such as `/#oximeli` filters the catalog.
- Order drawer with quantity steppers (max 20 per line), pickup or parcel-locker choice, name and note
- The order is saved in `localStorage` (`forest-prana-order-v1`) and survives reloads. Sold-out and unknown products are dropped on load.
- "Send via WhatsApp" builds the order text (items, total, delivery method) for `wa.me`
- Policies and delivery info, contacts (phone, WhatsApp, Instagram, Facebook)

## Tech stack

React 19, TypeScript, Vite, MUI 9 (Emotion), Cormorant Garamond and Open Sans via Fontsource, oxlint.

## Getting started

Requires Node.js. The repo has both `pnpm-lock.yaml` and `package-lock.json`. Netlify builds with pnpm, but npm works too.

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server (runs `fetch-assets` first) |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` (runs `fetch-assets` first) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run oxlint |
| `npm run fetch-assets` | Download product images only |

### Images

Images are not committed to the source tree. `scripts/fetch-assets.mjs` scans `src/data/products.ts` for `m('<file>')` references and downloads each file from the original Canva site into `public/media/`. Files that already exist are skipped, so the download happens once. If a download fails, the script warns and continues, so check the output if an image is missing.

## Editing content

Everything the shop sells is in [src/data/products.ts](src/data/products.ts):

- Products live in the `oximeli`, `ziedes` and `citi` arrays. Vinegars are in `etiki`, along with the `etikiBenefits` text.
- Each product has `id`, `name`, `price` (EUR), `image`, `description` and optionally `volume`. The `id` is also used as the URL hash and the order key, so keep it unique and stable.
- Set `soldOut: true` to show the "Pārdots" badge and block ordering.
- Reference images with `m('<filename>')`. Use a filename that exists on the Canva media host (or drop the file into `public/media/`) so `fetch-assets` finds it.
- Contact details (`PHONE`, `WHATSAPP_URL`, `INSTAGRAM_URL`, `FACEBOOK_URL`) and category titles and backgrounds (`categories`) are in the same file.

New products appear in the catalog and order flow automatically.

## Project structure

```
src/
  App.tsx              Page layout, hash routing, filter/search state
  main.tsx             Entry point
  theme.ts             MUI theme and colour palette
  data/products.ts     All product, category and contact data
  lib/
    catalog.ts         Flattened catalog, lookup by id, category filter types
    order.tsx          Order context: cart state, persistence, WhatsApp message
    format.ts          Price/volume formatting, scroll helper
  components/
    SiteHeader.tsx     Top bar with order button
    Hero.tsx           Forest header
    About.tsx          Intro section
    Catalog.tsx        Filter, search and product grid
    ProductDialog.tsx  Product details
    QtyStepper.tsx     Quantity control
    OrderDrawer.tsx    Order drawer and mobile order dock
    Policies.tsx       Terms and delivery
    Footer.tsx         Contacts and social links
    SectionHeading.tsx Shared heading
scripts/fetch-assets.mjs   Image downloader
```

## Deployment

The site is static. `npm run build` outputs to `dist/`. It is deployed on Netlify with build command `pnpm run build` and publish directory `dist`. Any static host works.
