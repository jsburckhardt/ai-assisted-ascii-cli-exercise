# Exercise 3 — Custom agents, tools, skills & MCP

**Owner:** Juan  ·  _(tentative — watch the clock)_

Same ASCII-art task, now driven by a **custom agent** instead of raw prompts.

This branch ships:
- `.github/agents/ascii-artist.md` — a custom agent with a tight mission, rules,
  and an allowed tool set.
- `.github/skills/ascii-art/SKILL.md` (+ `examples/`) — a knowledge pack the
  agent loads when it builds the renderers.
- `.vscode/mcp.json` — an example MCP server the agent can reach for live data.

## Try it
1. Select the **ascii-artist** agent in Copilot.
2. Ask it to implement the CLI.
3. Watch it read the skill, use file + terminal tools, and (optionally) call MCP.

The point: structure can live in **reusable agents and skills**, not just
one-off prompts.
