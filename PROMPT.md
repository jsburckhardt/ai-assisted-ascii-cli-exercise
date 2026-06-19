# Exercise 1 — Vibe coding (no structure)

**Owner:** Su

Open VS Code → GitHub Copilot **Agent mode** → paste this prompt verbatim and
let it run:

> bake me a cli that does ascii art. make it animated. use something popular.

That's the whole setup. There is **no `AGENTS.md`**, no `.github/` instructions,
and no examples — the agent has to guess everything.

## What to watch for
- The agent invents the language, library, and output style on its own
  (often Node.js + `figlet` + `chalk`).
- There is no `--style` flag in your head yet, so it will not build one.
- Animation is usually `setInterval` and flickers in real terminals.
- Expect **4–6 back-and-forth correction cycles** to steer it toward what you
  actually wanted. That friction is the point of this exercise.

➡️ Next: switch to `exercise2` and run the **same prompt** — but with structure
in place.
