# Copilot instructions — Portfolio

Short, actionable guidance for AI coding agents working in this repository.

## Big picture
- This is a small React + Vite single-page portfolio site (see `index.html`, `src/`) built with Tailwind CSS.
- The repository contains a nested copy at `Portfolio/` (also has its own `package.json` and a `deploy` script). Treat the root project as the canonical workspace unless asked otherwise; changes to build/deploy may need to be mirrored in `Portfolio/package.json`.

## Key files & where to look
- App entry / UI: `src/main.jsx`, `src/App.jsx` (primary layout and dark-mode handling). ✅
- Reusable components: `src/Myproject.jsx`, `src/Myproject2.jsx` (use video assets from `src/assets`).
- Styling: `tailwind.config.js` and `src/index.css` (Tailwind with `darkMode: 'class'`).
- Linting: `eslint.config.js` (project-specific rules and React settings).
- CI / deploy: `.github/workflows/deploy.yml` (builds with Node 20.14, runs `npm run build`, uploads `dist`, then uses `peaceiris/actions-gh-pages` to publish).
- Scripts & deps: `package.json` (root) and `Portfolio/package.json` (nested). Important scripts: `dev`, `build`, `lint`, `preview`, `deploy` (nested project uses `gh-pages`).

## Coding conventions & patterns
- Styling uses Tailwind utility classes in JSX. Keep classes on the component and prefer small composable components over large single-file markup.
- Dark mode uses class strategy; App toggles the `dark` class on a top-level div — follow this pattern when adding dark-mode-aware components.
- Components mix functional components (`App`) and class components (`Myproject extends PureComponent`). When modifying an existing component, preserve its component style unless a refactor is explicitly requested.
- Media assets are imported from `src/assets` and used inline (images and mp4 files). Example: `import myproject from "../src/assets/p1.mp4"` and used in a `<video>` tag.
- ESLint: follow existing rules (React plugin and Hooks plugin enabled); `react/jsx-no-target-blank` is turned off and `react-refresh/only-export-components` is configured.

## Build / dev / deploy workflows
- Local dev: `npm run dev` (Vite dev server). Manual verification: open the served URL (usually `http://localhost:5173`).
- Production build: `npm run build` → outputs to `dist/`.
- Preview production build locally: `npm run preview`.
- Lint: `npm run lint` runs ESLint across the repo.
- Deploy: The nested `Portfolio/package.json` provides `predeploy` and `deploy` with `gh-pages`; additionally, `.github/workflows/deploy.yml` will build and deploy the `dist/` from `main` branch using Node `20.14.0`.

## Automation & CI expectations
- GitHub Actions build uses Node 20.14 and installs with `npm install`, then runs `npm run build`; keep changes compatible with Node 20+.
- There are currently no automated tests in the repo — avoid assuming test runners or CI test steps.

## Safety checks & change guidance for AI edits
- When editing JS/JSX, run `npm run lint` and `npm run build` locally to ensure there are no lint or build regressions.
- For UI changes: spin up `npm run dev` and visually confirm across toggling dark mode and the video components on `Myproject.jsx` / `Myproject2.jsx`.
- If adding new packages, update both `package.json` files if the intent is to keep nested project consistent; note that the CI uses the root `package.json` when running GH Actions from `.github/workflows/deploy.yml`.

## Example tasks & examples
- Adding a new component: place under `src/`, import it into `App.jsx` and add Tailwind classes. Follow the existing import style and run `npm run lint`.
- Fixing a layout bug: modify the JSX in `src/App.jsx` and verify in dev server; confirm Tailwind classes are included in `tailwind.config.js` content globs (`./src/**/*.{js,ts,jsx,tsx}`).

## Questions to ask the repo owner (if unclear)
- Which folder is the canonical deploy target: the root project or the nested `Portfolio/` subproject?
- Should we add automated tests or a test runner? (None present currently.)

---
If any of these points are incomplete or you'd like specific examples added, tell me which area to expand (CI, component patterns, or deploy flow) and I'll update this file. ✅