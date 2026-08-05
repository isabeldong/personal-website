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
