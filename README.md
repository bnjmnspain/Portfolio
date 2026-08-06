# Information Technology Portfolio

A minimalist, high-performance developer portfolio built with Next.js 14 (App
Router), React, TypeScript, Tailwind CSS, and Framer Motion. Projects are
pulled live from the GitHub REST API.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom design tokens, dark/light mode via `class` strategy)
- Framer Motion for animation
- Lucide React for icons
- GitHub REST API for repos, stars, forks, profile stats
- Markdown blog via `gray-matter` + `react-markdown` + `rehype-highlight`

## Getting started

```bash
npm install
cp .env.example .env.local
# edit .env.local — at minimum set NEXT_PUBLIC_GITHUB_USERNAME
npm run dev
```

Open http://localhost:3000.

## One place to update everything

Edit **`lib/config.ts`**. Name, job title, bio, GitHub username, LinkedIn URL,
resume URL, contact email, skills, experience, certifications, testimonials,
and social links all live there — nothing else needs to change. Once you
update `githubUsername`, every GitHub-powered section (stats, project grid,
GitHub links) updates automatically.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_GITHUB_USERNAME` | Recommended | Also settable via `lib/config.ts`; used client-side. |
| `GITHUB_TOKEN` | Optional | Raises the GitHub API rate limit from 60/hr to 5,000/hr. Create a token with no scopes at github.com/settings/tokens. Server-side only. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Used for metadata, Open Graph tags, and the generated sitemap. |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional | Wire up your analytics provider of choice in `app/layout.tsx`. |

## Replacing placeholder content

- **Resume**: replace `public/resume.pdf` with your actual résumé (the one
  included is a placeholder stub).
- **Blog posts**: add markdown files to `content/blog/*.md` with frontmatter
  (`title`, `date`, `excerpt`, `tags`) — see the existing sample post.
- **Certifications / testimonials**: currently empty arrays in
  `lib/config.ts` — add your own entries and the pages populate automatically.
- **Contact form**: `app/api/contact/route.ts` validates and logs
  submissions but doesn't send email yet. Plug in a provider (Resend,
  Postmark, SendGrid, or a Formspree endpoint) — see the comment in that file.

## Project structure

```
app/            routes (App Router) — one folder per page, plus /api/contact
components/     reusable UI components
hooks/          useTheme, useScrollProgress
lib/            config.ts (single source of truth), utils, blog reader
services/       github.ts — all GitHub API calls
types/          shared TypeScript types
content/blog/   markdown blog posts
public/         static assets (resume, images)
```

## Performance & SEO

- Route-level metadata via the Metadata API in every `page.tsx`
- Open Graph + Twitter card tags in `app/layout.tsx`
- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` / `robots.txt`
  automatically from your routes and blog posts
- Images use `next/image` for automatic optimization
- GitHub API responses are cached and revalidated hourly (`revalidate: 3600`)
  so pages stay fast without hammering the API
- Run `npm run build` and check the output, or `npx lighthouse` against a
  deployed URL, to verify performance

## Accessibility

- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`)
- Visible focus states (`:focus-visible`) throughout
- `aria-label`s on icon-only buttons and the command palette
- `prefers-reduced-motion` respected globally in `app/globals.css`

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Add the environment variables from `.env.example` in the Vercel project
   settings (Settings → Environment Variables).
4. Deploy — Vercel auto-detects Next.js and builds with zero config.
5. Point your custom domain in Settings → Domains, then update
   `NEXT_PUBLIC_SITE_URL` to match.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run typecheck` — TypeScript check with no emit
- `npm run lint` — ESLint
