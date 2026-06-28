# Portfolio v1

Semantic personal portfolio content structure for Paolo Araneta.

## Included

- `package.json` with standard Astro scripts
- `astro.config.mjs` with a static output baseline
- `tsconfig.json` extending Astro strict settings
- `src/layouts/BaseLayout.astro` for document shell and metadata
- `src/pages/index.astro` as the semantic portfolio structure
- `src/styles/global.css` as the TailwindCSS theme and component layer
- `src/dto/` as structured portfolio content
- `src/assets/` as resume, project, testimonial, certificate, and gallery references

## Start

```bash
npm install
npm run dev
```

## Notes

- Output is `static` by default.
- This version uses TailwindCSS 4 through Astro's Vite pipeline.
- `src/styles/global.css` defines the theme tokens plus the component-layer styling for the portfolio layout.
- Keep this phase focused on content hierarchy, semantic HTML, and portfolio information architecture.
- Add visual design and motion only after the content structure is approved.
