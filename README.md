# ASCII Art CLI

Small Node.js CLI that renders text as colored ASCII art, with optional animation.

## Requirements

- Node.js 18+

## Run

```bash
node bin/ascii-art.js --name "Juan" --style fire
```

## Flags

- `--name` (required): text to render.
- `--style` (optional): `fire`, `matrix`, or `ghost`.
- `--animate` (optional): animate the output until `Ctrl+C`.
- `--help`: show usage information.

## Examples

```bash
node bin/ascii-art.js --name "Copilot" --style matrix
node bin/ascii-art.js --name "Workshop" --style ghost --animate
```

