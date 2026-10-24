# Forest Prana – React

A React + TypeScript + MUI rebuild of https://forestprana.my.canva.site/

## Run

```bash
npm install
npm run dev      # http://localhost:5173
```

Before `dev` and `build`, `scripts/fetch-assets.mjs` downloads the site's images from the Canva site into
`public/media/`. Files that are already downloaded are skipped, so this happens only once.

## Edit content

All products, prices, descriptions, images and contact links are in `src/data/products.ts`.
- Set `soldOut: true` to show the "Pārdots" badge.
- To add a product, add an object to `oximeli`, `ziedes` or `citi`. It appears in the category index and the product list automatically.

## Structure

- `src/components/Hero.tsx`: forest header with the nav pills
- `About.tsx`: "Laipni lūgti" / about section
- `CatalogOverview.tsx`: the 4 category tiles
- `CategoryIndex.tsx`: photo-background section with product links
- `ProductCard.tsx`: a single product block
- `Vinegars.tsx`, `Contacts.tsx`, `InfoSections.tsx` (Noteikumi + Piegāde)
- `src/theme.ts`: MUI theme and colours
