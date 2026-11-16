# Sumit Parmar portfolio (Next.js)

Next.js 15 + React 19 + TypeScript, static export. Same design as the original single file site.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to ./out
```

## Structure

- `app/page.tsx` composes the home page from `components/` (one file per section).
- `public/site.js` holds the home page animations and the work card data (PROJECTS array).
- `app/work/evalloop/page.tsx` is the evalloop case study. Copy it to add more case studies.
- `content/evalloop.ts` holds the evalloop text and numbers shared by the home section and the case study.
- `app/globals.css` is the stylesheet (theme variables at the top, `.cs-*` rules for case study pages).

## Deploy (Vercel)

Import the repo on vercel.com. Framework preset is detected as Next.js. No settings to change.
