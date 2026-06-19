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

## How we build it: a two-agent workflow

This exercise splits the work across two **custom agents** (in `.github/agents/`)
to show separation of concerns — then contrasts them with Copilot's
**out-of-the-box** agents.

### Custom agents
| Agent | File | Can do | Deliverable |
| ----- | ---- | ------ | ----------- |
| **planner** | `.github/agents/planner.md` | **Read-only.** Reads the repo and researches the web via the **Exa MCP** server. Never edits code or runs commands. | `PLAN.md` — an ordered, checkable build plan |
| **implementer** | `.github/agents/implementer.md` | Reads `PLAN.md` + the `ascii-art` skill, edits files, runs the CLI to verify. | Working `bin/ascii-art.js` |

Flow:  **planner → `PLAN.md` → implementer → working CLI.**

### Out-of-the-box agents (show these first in the demo)
- **Research agent** — multi-source web search + a plan.
- **Code review agent** — static analysis + suggestions on the diff.
- **PR summary agent** — turns a diff into a readable description.

## MCP
- `.vscode/mcp.json` registers the **Exa** MCP server (`web_search_exa`,
  `web_fetch_exa`) — used by the **planner** to research before writing the plan.

## Skill
- `.github/skills/ascii-art/SKILL.md` documents the three styles; the
  **implementer** reads it before writing the renderers.

## Done when
- `node bin/ascii-art.js --name "Juan" --style fire` runs on the first try.
- All three styles produce visibly distinct output.
- Missing or invalid flags fail gracefully.
