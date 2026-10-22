# Repository working agreements

## Engineering principles

- Treat the website as a coherent system rather than a sequence of isolated patches.
- Prefer simple, compact architecture appropriate for this small Eleventy site.
- Reuse shared layouts, styles, scripts, and data patterns instead of duplicating them.
- Refactor related files together when a change affects structure, content, styling, or behavior.
- Remove obsolete code after migrations and avoid preserving compatibility paths that are no longer used.
- Keep one clear source of truth for each piece of content or behavior.
- Avoid speculative abstractions, unnecessary dependencies, and invented content.
- Preserve existing behavior unless the requested change intentionally alters it.

## Verification and communication

- Run `npm run build` after structural, template, data, or styling changes.
- Check responsive behavior when changing layout.
- After every implementation round, succinctly list each file changed and what changed in it.

## Typography

- Keep the six text roles in the typography block at the start of `src/styles.css`.
- Use H1 for page titles (16px), H2 for sections (14px), H3 for subsections (13px), and H4 for detail headings (12px). All four levels display in uppercase.
- Use 13px body text and 11px supporting text. Supporting text includes captions, metadata, small labels, and code blocks; preserve its written case.
- Use the same type sizes on desktop, mobile, and in print. Let text wrap instead of shrinking it for individual pages.
- Use semantic heading elements. Component classes control layout and color, not heading typography.
- Change shared typography rules when needed. Do not add page-specific font sizes, weights, capitalization, letter spacing, or line heights.
