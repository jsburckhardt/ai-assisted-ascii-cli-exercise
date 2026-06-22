# AGENTS.md

Briefing for any coding agent working in this repo.

## Goal
Build a small, self-contained **ASCII-art CLI** that renders a name as colored
ASCII art in the terminal.

## Runtime & constraints
- Node.js 18+, **CommonJS** (no ESM, no build step).
- **No external or network APIs** in the shipped CLI. Fully self-contained.
- **Zero third-party dependencies** — render with built-in ANSI escape codes.

## CLI contract
    ascii-art --name "<text>" [--style <fire|matrix|ghost>] [--animate]

- `--name` is **required**; print a friendly error and exit non-zero if missing.
- `--style` defaults to `fire`.
- `--animate` loops frames until `Ctrl+C`; clear the screen per frame (no flicker).
- `--help` prints usage.

## What's in the repo
- **Custom agents** — `.github/agents/planner.md` (researches and writes
  `PLAN.md`) and `.github/agents/implementer.md` (builds the CLI from the plan).
- **MCP** — `.vscode/mcp.json` registers the **Exa** MCP server
  (`web_search_exa`, `web_fetch_exa`).
- **Skill** — `.github/skills/ascii-art/SKILL.md` documents the three styles.

## Done when
- `node bin/ascii-art.js --name "Juan" --style fire` runs on the first try.
- All three styles produce visibly distinct output.
- Missing or invalid flags fail gracefully.
