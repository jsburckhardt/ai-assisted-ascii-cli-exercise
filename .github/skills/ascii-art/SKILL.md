---
name: ascii-art
description: How to render names as styled, animated ASCII art in the terminal using only ANSI codes.
---

# Skill: ascii-art

Load this when implementing or changing the CLI's style renderers.

## Styles
| Style  | Look                                             |
| ------ | ------------------------------------------------ |
| fire   | Warm gradient (red -> yellow), flickers per frame |
| matrix | Green-on-black, characters "rain" downward       |
| ghost  | Dim white, slow pulse (fades in and out)         |

## Rendering rules
- ANSI escape codes only — **no libraries**.
- One frame = clear screen (`\x1b[2J\x1b[H`) then draw.
- Animate at ~12 fps; on `Ctrl+C`, restore the cursor (`\x1b[?25h`) and exit 0.

## Examples
See `examples/fire-example.txt` and `examples/matrix-example.txt` for the
expected shape of a single rendered frame.
