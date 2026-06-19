# Copilot instructions

- **Language:** Node.js (CommonJS). Do not introduce ESM or a bundler.
- **Dependencies:** none — use only the Node standard library.
- **Entry point:** a single `bin/ascii-art.js`.
- **Input handling:** validate flags; on bad input print a one-line message and
  exit with a non-zero code.
- **Style renderers:** one small pure function per style (`fire`, `matrix`,
  `ghost`).
- **Animation:** clear the screen each frame; restore the cursor on exit.
