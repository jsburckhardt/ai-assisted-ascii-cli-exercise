# From Vibe Coding to Structured AI Development — Marp deck

A [Marp](https://marp.app/) (Markdown-based) recreation of the
`vibe-to-structured-ai-1hr.pptx` workshop deck (21 slides), using a custom
GitHub-dark theme.

## Files

| File                     | Purpose                                                        |
| ------------------------ | ------------------------------------------------------------- |
| `deck.md`                | The slide deck source (Marp Markdown).                        |
| `themes/github-dark.css` | Custom Marp theme replicating the original GitHub-dark design. |
| `marp.config.js`         | Marp CLI config (enables inline HTML + registers the theme).  |
| `deck.html` / `deck.pdf` | Rendered outputs (regenerate with the commands below).        |

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- Marp CLI:

  ```bash
  npm install -g @marp-team/marp-cli
  ```

PDF export additionally requires a Chromium/Chrome browser available on the
system (Marp uses it under the hood).

## Preview & build

Run all commands from this `slides/` directory (so `marp.config.js` is picked
up automatically).

```bash
# Live preview in the browser (auto-reloads on save)
marp -p deck.md

# Build a self-contained HTML file
marp deck.md -o deck.html

# Build a PDF
marp deck.md --pdf -o deck.pdf

# Build a PowerPoint (.pptx)
marp deck.md --pptx -o deck.pptx
```

## Editing notes

- The deck uses inline HTML (`<div class="...">`) for the multi-column card
  layouts. This is enabled via `html: true` in `marp.config.js`.
- Keep each HTML block contiguous (no blank lines inside a block) so the
  Markdown parser keeps it as raw HTML.
- Per-slide layout is selected with Marp directives, e.g.
  `<!-- _class: section -->` (section divider), `<!-- _class: title -->`,
  `<!-- _class: closing -->`. The bottom-left time label uses `_footer` and the
  `N / 21` counter uses `paginate`.
- Layout/colour helpers (cards, icon circles, pills, badges, banners, accent
  colours) live in `themes/github-dark.css`.
