# Ghanshyam Jha — Portfolio

Dark-themed developer portfolio. React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Vercel or Netlify (or connect the repo directly; both auto-detect Vite).

## Where to edit content

All real content lives in `src/data/*.ts` — components never hardcode copy.

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, hero pitch, about bio, chips, stats, resume link, email, socials, footer quote |
| `src/data/experience.ts` | Work history timeline cards + academic positions |
| `src/data/projects.ts` | Project cards (title, status, description, tech, links, images) |
| `src/data/skills.ts` | Skill categories, proficiency levels, one-liners |
| `src/data/testimonials.ts` | Optional — leave the array empty and the section auto-hides |

Search the codebase for `[PLACEHOLDER]` to find every spot that needs your real info — mainly work-experience details, since GitHub doesn't expose that.

### Resume
Drop your PDF at `public/resume.pdf` (already wired up in `profile.ts` → `resumeUrl`).

### Project images
Drop screenshots in `public/projects/` and update the `images` array per project in `projects.ts`. Currently using placeholder gradient tiles so the build has no missing-asset errors.

## Notable pieces

- **Theme toggle** — dark by default, respects `prefers-color-scheme` on first visit, persisted in `localStorage`. See `src/hooks/useTheme.ts`.
- **Active-section nav highlighting** — `IntersectionObserver`-based, see `src/hooks/useActiveSection.ts`.
- **GJ_TERM** — an interactive CLI easter egg, reachable three ways: the terminal icon in the navbar, the live preview panel in the hero (click it), and a persistent bottom-right launcher that follows you down the page. Commands: `help`, `about`, `skills`, `projects`, `github`, `linkedin`, `resume`, `contact`, `whoami`, `clear`. Edit responses in `src/components/Terminal.tsx`.
- **Code DNA** — a real animated canvas helix (not static SVG) mapping your confirmed tech stack, with brand-accurate colors and a mouse-following tooltip. Paired with a **Hackathon Journey** timeline (icon badges + GitHub achievements) in a two-column layout. In `src/components/CodeDNA.tsx`, `src/components/HackathonJourney.tsx`, `src/data/codedna.ts`, `src/data/hackathons.ts`.
  - Note: Ideathon, CMR Hackathon 2.0, and Hacktoberfest are corroborated across multiple sources. **Murf AI Challenge and the Kaggle 5-Day Challenge are unverified** — confirm before treating as fact.
- **Custom cursor** — dual-ring lag cursor with magnetic hover on interactive elements, `src/components/CustomCursor.tsx`. Auto-disables on touch devices and when `prefers-reduced-motion` is set.
- **Particle field** — a single fixed canvas layer of drifting dots behind the *entire* page (not per-section), so it's visible everywhere as you scroll rather than resetting section to section. `src/components/ParticleField.tsx`, mounted once in `App.tsx`.
- **Scroll progress bar** — thin gold indicator fixed to the top of the viewport, tracks scroll position, `src/components/ScrollProgress.tsx`.
- **Section spacing** — sections that don't need a full screen (About, Experience) use a `compact` variant instead of forcing `min-h-screen`, which was leaving large dead zones. Contact stays full-height deliberately: since it's the last section, a shorter last section can't be scrolled flush to the top (there's nothing below it to scroll into) — that's a genuine scroll-limit constraint, not a style choice.
- **Tabbed Experience** — Work / Hackathons / Education tabs in `src/data/experience.ts`. Only the Hackathons tab is filled with verified data from your GitHub; Work and Education are placeholders — **do not publish invented employers, dates, or metrics.**
- **Accessibility** — semantic headings, visible focus rings (`focus-ring` class), `prefers-reduced-motion` respected globally in `index.css`.

## A note on content honesty

This scaffold intentionally leaves your work history and education as `[PLACEHOLDER]` rather than inventing a company, dates, or a specific performance metric. Fill those in from your actual resume before publishing — a public portfolio with fabricated experience or testimonials is a real professional risk, not just a content gap.

## Deploy

**Vercel**: import the repo, framework preset "Vite", default build command works as-is.
**Netlify**: build command `npm run build`, publish directory `dist`.
