# Portfolio v1

Semantic personal portfolio content structure for Paolo Araneta.

## Included

- `package.json` with standard Astro scripts
- `astro.config.mjs` with a static output baseline
- `tsconfig.json` extending Astro strict settings
- `src/layouts/BaseLayout.astro` for document shell and metadata
- `src/pages/index.astro` as the semantic portfolio structure
- `src/styles/layout.css` as structural layout only
- `src/dto/` as structured portfolio content
- `src/assets/` as resume, project, testimonial, certificate, and gallery references

## Start

```bash
npm install
npm run dev
```

## Notes

- Output is `static` by default.
- This version intentionally keeps browser-default colors and avoids visual design decisions.
- `src/styles/layout.css` exists only for page structure, image constraints, and the menu sidebar layout.
- Keep this phase focused on content hierarchy, semantic HTML, and portfolio information architecture.
- Add visual design and motion only after the content structure is approved.
