# Astro Boilerplate

Minimal Astro starter intended as a reusable baseline for new projects.

## Included

- `package.json` with standard Astro scripts
- `astro.config.mjs` with a static output baseline and Tailwind 4 Vite plugin
- `tsconfig.json` extending Astro strict settings
- `src/layouts/BaseLayout.astro` for document shell and metadata
- `src/components/Hero.astro` as a simple presentational component
- `src/components/FeatureTile.astro` for the repeated feature-card pattern
- `src/pages/index.astro` as the default route with Tailwind utility usage
- `src/styles/global.css` importing Tailwind and project-wide base CSS
- `src/styles/theme.css` defining shared Tailwind theme tokens

## Start

```bash
npm install
npm run dev
```

## Notes

- Output is `static` by default.
- Tailwind 4 is configured through `@tailwindcss/vite`; a `tailwind.config` file is optional unless the project needs custom scanning or advanced configuration.
- Add integrations and adapters only when the project needs them.
- Keep routes thin and hydrate only isolated interactive components.
