# Yathendra Ankaiah — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS,
and Framer Motion. Sections: hero, two deep-dive case studies, a competencies
matrix, and an interactive component lab (a draggable pipeline builder and an
animated evaluation chart).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a resume PDF

Drop a file at `public/resume.pdf` — the Resume button in the hero already
links to `/resume.pdf`.

## Editing content

All copy (experience, case studies, skills, links) lives in
[`src/lib/content.ts`](src/lib/content.ts) — edit that file rather than the
components to update text.

## Deploy

```bash
npx vercel --prod
```
