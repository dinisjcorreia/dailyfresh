# DailyFresh (`https://dailyfresh.vercel.app/`)

DailyFresh brings personalized recipes, nutrition tracking, and ingredient delivery together in a mobile-first experience.

# Key features
- Recipe suggestions with nutritional info and estimated cost.
- Recipe selection with tabbed navigation (Recipes, Delivery, Nutrition, Costs).
- CTA prepared for scheduling ingredient delivery.
- Mobile-optimized interface with a green theme.

## Tech stack
- Next.js 14 / React 18 / TypeScript
- Tailwind CSS + Radix UI (Tabs, Select, Inputs, Buttons)

## Prerequisites
- Node.js 18+ and npm

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:3000 to view the app.

## Useful scripts
- `npm run dev` — development server with hot reload.
- `npm run lint` — lint the codebase with ESLint.
- `npm run build` — production build for Next.js.
- `npm run start` — run the local production server (after build).

## Project structure
- `app/` — routing, base layout, and global styles.
  - `app/layout.tsx` — metadata, fonts, HTML shell.
  - `app/page.tsx` — mounts the main component.
- `components/daily-fresh-app.tsx` — main application UI.
- `components/ui/` — UI primitives (button, input, tabs, select, etc).
- `public/` — static assets (logo, recipe images).
- `lib/utils.ts` — shared utilities (e.g., `cn` for class merging).
