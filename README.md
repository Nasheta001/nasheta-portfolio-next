# Nasheta John · Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS. Fully static, no database.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Pages: `/`, `/writing`, `/developer`.

## Edit text

All text and links live in `src/content/`:

| File | What it holds |
| --- | --- |
| `site.ts` | Name, email, CV link, social links, homepage text |
| `writing.ts` | Niches, services, sample categories, order steps |
| `development.ts` | Services, projects, tools, project steps |

Replace any `[BRACKETED]` placeholder with the real value.

## Homepage photo

Save a cut-out photo as `design/me.png`. It is used automatically on the next build.

## Subdomains

Set `NEXT_PUBLIC_ROOT_DOMAIN` (e.g. `nashetajohn.com`) in Vercel, then redeploy:

- `nashetajohn.com` → home
- `writing.nashetajohn.com` → `/writing`
- `developer.nashetajohn.com` → `/developer`

The routing lives in `src/proxy.ts` (Next.js 16's new name for `middleware.ts`). Link targets come from `src/lib/links.ts`.
