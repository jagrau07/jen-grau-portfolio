# Jen Grau — portfolio

Astro static site, deployed to Cloudflare Pages at https://jengrau.pages.dev.

## Before the first deploy

1. `src/data/site.ts` — LinkedIn URL. There is intentionally no email, phone or résumé on the site; LinkedIn is the contact path.
2. `astro.config.mjs` — `site` is https://jengrau.pages.dev; change it if you add a custom domain.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
```

Requires Node 22.12+.

## Edit content

- Case studies: `src/content/work/*.mdx`. Frontmatter drives the index row, the meta strip and the closing "What I'd do differently" quote. `order` sets position; `draft: true` hides one.
- The highlighted decision block is the `<Decision heading obvious instead>` tag inside each file.
- Home page sections (principles, timeline, roles): arrays at the top of `src/pages/index.astro`.
- Colors and fonts: tokens at the top of `src/styles/global.css`.

## Deploy to Cloudflare

Option A — from your machine:

```bash
npx wrangler login
npm run deploy     # builds, then uploads ./dist
```

Option B — Git-connected (auto-deploy on push): in the Cloudflare dashboard choose Workers & Pages → Create → Pages → Connect to Git. Project name `jengrau` (sets the pages.dev URL), framework preset Astro, build command `npm run build`, output directory `dist`.

Add a custom domain under the Pages project's Custom domains tab.

## Handoff notes

No runtime, no server, no database. Everything is static HTML in `dist/`; fonts are self-hosted via Fontsource, so there are no third-party requests.
