# Exercise 3 — Custom agents, tools, skills & MCP

**Owner:** Juan  ·  _(tentative — watch the clock)_

Same ASCII-art task — now we contrast Copilot's **out-of-the-box agents** with
two **custom agents** that split planning from implementation.

## Demo flow
1. **Out-of-the-box first.** Show the **Research** agent ("find approaches for
   rendering ASCII art in a terminal"), then **Code review** / **PR summary** —
   no setup required.
2. **Custom: planner** (`.github/agents/planner.md`) — **read-only**. It
   researches with the **Exa MCP** server and writes `PLAN.md`. It never edits
   code or runs commands.
3. **Custom: implementer** (`.github/agents/implementer.md`) — reads `PLAN.md`
   and the `ascii-art` skill, then builds `bin/ascii-art.js` and runs it.

Flow:  **planner → PLAN.md → implementer → working CLI.**

This branch ships:
- `AGENTS.md` — goal, constraints, CLI contract, and the two-agent workflow.
- `.github/agents/planner.md` and `.github/agents/implementer.md` — the custom agents.
- `.github/skills/ascii-art/SKILL.md` (+ `examples/`) — knowledge pack for the implementer.
- `.vscode/mcp.json` — the **Exa** MCP server used by the planner.
- `llm.txt` — a file map of all of the above.

The point: structure can live in **reusable agents, skills, and MCP** — and you
can split read-only planning from write-capable implementation.
