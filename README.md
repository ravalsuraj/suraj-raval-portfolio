# Suraj Raval — Portfolio & Resume

A production-quality portfolio and resume site positioning Suraj Raval as a
**Senior Software Engineer / Technical Architect** working at the intersection of
**Enterprise Payments · JavaScript · Salesforce Architecture**.

Built with the same engineering aesthetic used by Stripe, Vercel, and Linear:
large typography, generous whitespace, subtle borders, a muted monochrome
palette, and no gimmicky motion.

## Tech stack

| Concern        | Choice                                   |
| -------------- | ---------------------------------------- |
| Framework      | Next.js 15 (App Router)                  |
| Language       | TypeScript (strict)                      |
| Styling        | Tailwind CSS 3.4                         |
| Components     | shadcn/ui primitives (new-york style)    |
| Typography     | Geist Sans + Geist Mono (`next/font`)    |
| Theming        | `next-themes` (light / dark / system)    |
| Icons          | lucide-react                             |
| Deploy target  | Vercel                                   |

## Features

- **6-page site** — Home, About, Experience, Projects, Resume, Contact (plus a `/blog` placeholder)
- **Responsive** mobile-first layout with an accessible mobile nav
- **Dark mode** with system preference + manual toggle, no flash on load
- **SEO** — per-page metadata, Open Graph, dynamic OG image, `sitemap.xml`, `robots.txt`
- **ATS-friendly resume** — single column, selectable text, print-optimized `@media print` styles
- **PDF export** — "Download PDF" triggers the native print dialog → *Save as PDF*
- **Bonus** — career timeline, skill-proficiency bars, ASCII architecture diagrams, highlights grid, contact form + GitHub/LinkedIn placeholders, blog placeholder

## Getting started

```bash
npm install        # or: pnpm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
```

> Note: `next/font` downloads the Geist fonts at build time, so the first
> `dev`/`build` needs network access.

## Editing content

All content lives in **one file** — `src/lib/data.ts`. Update:

- `site` — name, title, summary, location, email, URL
- `navItems`, `socials` — navigation and social links (swap the placeholder hrefs)
- `skillCategories`, `skillProficiencies` — skills and proficiency bars
- `experience` — roles, dates, responsibilities, tech stacks
- `projects` — project cards, highlights, and ASCII architecture diagrams
- `education`, `highlights` — resume education and the highlights grid

Types are defined in `src/types/index.ts`. The resume, home, projects, and
experience pages all read from this single source of truth.

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, metadata, theme provider, header/footer
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── experience/page.tsx
│   ├── projects/page.tsx
│   ├── resume/page.tsx       # printable / PDF-export resume
│   ├── contact/page.tsx
│   ├── blog/page.tsx         # placeholder
│   ├── globals.css           # theme tokens + print styles
│   ├── opengraph-image.tsx   # dynamic OG image
│   ├── icon.svg
│   ├── sitemap.ts / robots.ts
│   └── not-found.tsx
├── components/
│   ├── ui/                   # shadcn primitives (button, card, badge, …)
│   ├── site-header.tsx / site-footer.tsx
│   ├── theme-provider.tsx / theme-toggle.tsx
│   ├── hero.tsx
│   ├── skills-section.tsx / skill-proficiency.tsx
│   ├── career-timeline.tsx
│   ├── project-card.tsx / featured-projects.tsx
│   ├── architecture-diagram.tsx
│   ├── highlights.tsx
│   ├── resume-document.tsx / print-button.tsx
│   ├── contact-form.tsx
│   └── section-heading.tsx / page-header.tsx
├── lib/
│   ├── data.ts               # ← all site content
│   └── utils.ts              # cn() helper
└── types/index.ts
```

## Resume PDF / ATS notes

The resume page renders as **real selectable text in a single column** — no
multi-column layouts, tables, or text-in-images — which is what applicant
tracking systems parse reliably. The `@media print` block in
`src/app/globals.css` hides all site chrome and formats the resume sheet to A4.

To export: open `/resume` → **Download PDF** → choose **Save as PDF** in the
print dialog.

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js (no config needed).
3. (Optional) set `NEXT_PUBLIC_SITE_URL` to your production domain — see `.env.example`. Then update `site.url` in `src/lib/data.ts` so metadata, OG, and the sitemap use the real domain.
4. Deploy. Every push to the default branch ships to production; PRs get preview URLs.

CLI alternative:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## Things to wire up later

- **Contact form** (`src/components/contact-form.tsx`) — connect `handleSubmit` to a server action / API route / Resend / Formspree.
- **Social links** (`src/lib/data.ts → socials`) — replace placeholder GitHub/LinkedIn URLs.
- **Blog** (`src/app/blog/page.tsx`) — drop in MDX or a CMS.

## License

Personal project © Suraj Raval.
