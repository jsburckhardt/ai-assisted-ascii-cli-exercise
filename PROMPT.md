# Exercise 2 — Grounded / structured run

**Owner:** Tomomi

Run the **exact same prompt** as exercise 1:

> bake me a cli that does ascii art. make it animated. use something popular.

The difference: this branch ships **briefing documents** the agent reads before
it writes any code —

- `AGENTS.md` — goal, runtime, constraints, and the CLI contract.
- `.github/copilot-instructions.md` — coding style and stack dos & don'ts.
- `llms.txt` — concise, model-agnostic facts about the tool.

## What to watch for
- The agent now targets Node 18 CommonJS, zero dependencies, ANSI output.
- All three styles (`fire`, `matrix`, `ghost`) and `--animate` are implemented.
- It runs on the first attempt — **zero correction cycles** needed.

Same task, same prompt — structure is the only variable that changed.
