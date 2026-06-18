---
marp: true
theme: github-dark
paginate: true
size: 16:9
title: From Vibe Coding to Structured AI Development
author: Juan Burckhardt
---

<!-- _class: title -->
<!-- _paginate: false -->
<!-- _footer: 'ISE ASIA-AUSTRALIA  |  Juan Burckhardt' -->

<div class="term-line">$ copilot --structured --mode agent --duration 60min</div>
<div class="headline">From Vibe Coding<br><span class="alt">to Structured AI Development</span></div>
<div class="tagline">GitHub Copilot in VS Code — 1-Hour Workshop</div>
<div class="infobox">⏱&nbsp;&nbsp;60 min&nbsp;&nbsp;|&nbsp;&nbsp;7 demos&nbsp;&nbsp;|&nbsp;&nbsp;1 live build</div>

---

<!-- _footer: '' -->

# Agenda

<div class="subtitle">60 minutes — paced with live demos throughout</div>
<div class="agenda"><div class="ag-item"><span class="pill">0–5 min</span><span class="badge">01</span><div class="txt"><h3>The Landscape</h3><p>Copilot modes, what changed with agents</p></div></div><div class="ag-item"><span class="pill">32–42 min</span><span class="badge">05</span><div class="txt"><h3>Live Exercise — Part 2</h3><p>Same task, structured path</p></div></div><div class="ag-item"><span class="pill">5–12 min</span><span class="badge">02</span><div class="txt"><h3>Vibe vs. Structured</h3><p>What goes wrong and why</p></div></div><div class="ag-item"><span class="pill">42–50 min</span><span class="badge">06</span><div class="txt"><h3>Tools, Skills &amp; MCP</h3><p>The agent's full toolkit + ascii-art skill demo</p></div></div><div class="ag-item"><span class="pill">12–22 min</span><span class="badge">03</span><div class="txt"><h3>Live Exercise — Part 1</h3><p>Build a CLI tool: vague prompt path</p></div></div><div class="ag-item"><span class="pill">50–56 min</span><span class="badge">07</span><div class="txt"><h3>Agents</h3><p>Out-of-the-box &amp; custom agents</p></div></div><div class="ag-item"><span class="pill">22–32 min</span><span class="badge">04</span><div class="txt"><h3>Adding Structure</h3><p>AGENTS.md, copilot-instructions.md, llm.txt</p></div></div><div class="ag-item"><span class="pill">56–60 min</span><span class="badge">08</span><div class="txt"><h3>What's Next + Q&amp;A</h3><p>RPIV, spec-driven dev, harnesses</p></div></div></div>

---

<!-- _class: section -->
<!-- _footer: '⏱ 0–5 min' -->

<div class="big"><span class="num">01</span>The Landscape</div>
<div class="desc">Copilot modes, what changed with agents</div>

---

<!-- _footer: '⏱ 0–5 min' -->

# GitHub Copilot in VS Code

<div class="subtitle">Four interaction modes — each with different expectations</div>
<div class="cols cols-4"><div class="card acc green center"><div class="icon c-green">⌨️</div><h3 class="c-green">Inline Completions</h3><p class="muted">Tab to accept as you type. Single-line or small block. Zero context-setting needed.</p></div><div class="card acc blue center"><div class="icon c-blue">💬</div><h3 class="c-blue">Chat</h3><p class="muted">Ask questions, explain code, get snippets. You drive; Copilot responds.</p></div><div class="card acc teal center"><div class="icon c-teal">📝</div><h3 class="c-teal">Edits (multi-file)</h3><p class="muted">Describe a change; Copilot edits across files. Needs clear scope.</p></div><div class="card acc purple center"><div class="icon c-purple">🤖</div><h3 class="c-purple">Agent Mode</h3><p class="muted">Copilot plans, runs tools, iterates autonomously. Needs structure to stay on track.</p></div></div>
<div class="banner purple italic c-purple">This session focuses on Agent Mode — where structure matters most.</div>

---

<!-- _class: section -->
<!-- _footer: '⏱ 5–12 min' -->

<div class="big"><span class="num">02</span>Vibe vs. Structured</div>
<div class="desc">What goes wrong — and why</div>

---

<!-- _footer: '⏱ 5–12 min' -->

# Why Vibe Coding Fails

<div class="subtitle">The agent can only work with what you give it</div>
<div class="cols cols-4 flow"><div class="card acc orange center"><div class="icon c-orange">⚠️</div><h3 class="c-orange">Vague Prompt</h3><p class="muted">"make a CLI that does ASCII art"</p></div><div class="card acc gold center"><div class="icon c-gold">💡</div><h3 class="c-gold">Agent Guesses</h3><p class="muted">Picks a library, style, framework</p></div><div class="card acc orange center"><div class="icon c-orange">⚠️</div><h3 class="c-orange">Wrong Direction</h3><p class="muted">Not what you meant — but it's committed</p></div><div class="card acc gray center"><div class="icon c-muted">🔁</div><h3 class="c-muted">Back-and-Forth</h3><p class="muted">4–6 correction cycles to recover</p></div></div>
<div class="spacer"></div>
<div class="cols cols-3"><div class="card ring orange"><h3 class="c-orange">No goal</h3><p class="muted">Agent doesn't know success criteria</p></div><div class="card ring orange"><h3 class="c-orange">No constraints</h3><p class="muted">Any approach is valid — agent picks arbitrarily</p></div><div class="card ring orange"><h3 class="c-orange">No examples</h3><p class="muted">Agent has no reference point for style or output</p></div></div>

---

<!-- _class: section -->
<!-- _footer: '⏱ 12–22 min' -->

<div class="big"><span class="num">03</span>Live Exercise — Part 1</div>
<div class="desc">Build a CLI tool: the vague prompt path</div>

---

<!-- _footer: '⏱ 12–22 min' -->

# What We're Building

<div class="subtitle">A small, focused tool — enough to show the difference clearly</div>
<div class="term"><div class="dots"><i style="color:#ff5f56">●</i> <i style="color:#ffbd2e">●</i> <i style="color:#27c93f">●</i></div><div class="cmd"><span class="p">$</span> ascii-art <span class="flag">--name</span> <span class="str">"Juan"</span> <span class="flag">--style</span> fire <span class="flag">--animate</span></div></div>
<div class="spacer"></div>
<div class="cols cols-4"><div class="card acc blue center"><div class="icon c-blue">⌨️</div><h3 class="c-blue">CLI Interface</h3><p class="muted">Takes --name, --style, --animate flags</p></div><div class="card acc green center"><div class="icon c-green">🎨</div><h3 class="c-green">ASCII Output</h3><p class="muted">Renders the name as animated ASCII art</p></div><div class="card acc purple center"><div class="icon c-purple">⚙️</div><h3 class="c-purple">Node.js / Python</h3><p class="muted">Student's choice of runtime</p></div><div class="card acc gold center"><div class="icon c-gold">🚫</div><h3 class="c-gold">No external APIs</h3><p class="muted">Self-contained, no network calls needed</p></div></div>
<div class="banner teal italic c-teal">Demo: Open VS Code → Agent mode → paste the vague prompt. Watch what happens.</div>

---

<!-- _footer: '⏱ 12–22 min' -->

# The Vague Prompt Path

<div class="subtitle">What the agent does when you leave it to guess</div>
<div class="cols cols-2"><div class="card acc orange said"><h3 class="c-orange">You said</h3><p>"create a CLI that does ASCII art"</p><p>"make it animated"</p><p>"use something popular"</p></div><div class="card acc gray"><h3 class="c-muted">Agent assumed</h3><ul class="list"><li>Library: figlet + chalk<span class="sub">(maybe not what you wanted)</span></li><li>Style: random default<span class="sub">(no --style flag implemented)</span></li><li>Animation: setInterval<span class="sub">(flickers on Windows terminals)</span></li><li>Language: Node.js<span class="sub">(you might have meant Python)</span></li></ul></div></div>
<div class="banner orange italic c-orange">Result: working code — but not YOUR vision. Now you spend time correcting, not building.</div>

---

<!-- _class: section -->
<!-- _footer: '⏱ 22–32 min' -->

<div class="big"><span class="num">04</span>Adding Structure</div>
<div class="desc">AGENTS.md, copilot-instructions.md, llm.txt</div>

---

<!-- _footer: '⏱ 22–32 min' -->

# The Agent's Briefing Documents

<div class="subtitle">Three files that give the agent context before it starts</div>
<div class="cols cols-3"><div class="card acc blue center"><div class="icon c-blue">📄</div><h3 class="fname c-blue">AGENTS.md</h3><div class="loc">Project root</div><p class="muted">Agent config: goal, scope, allowed tools, constraints</p><pre><code>Goal: build a Node.js CLI
Runtime: Node 18+, no ESM
Do NOT use external APIs
Output format: ANSI escape codes</code></pre></div><div class="card acc teal center"><div class="icon c-teal">📝</div><h3 class="fname c-teal">copilot-instructions.md</h3><div class="loc">.github/ folder</div><p class="muted">Copilot-specific: coding style, stack, dos &amp; don'ts</p><pre><code>Use TypeScript strict mode
Prefer functional patterns
Test with Vitest, not Jest
No default exports</code></pre></div><div class="card acc purple center"><div class="icon c-purple">🗄️</div><h3 class="fname c-purple">llm.txt</h3><div class="loc">Project root</div><p class="muted">Any LLM: concise facts, examples, scope limits</p><pre><code># ascii-art CLI
Inputs: --name, --style, --animate
Outputs: terminal-rendered ASCII
Styles: fire, matrix, ghost</code></pre></div></div>

---

<!-- _class: section -->
<!-- _footer: '⏱ 32–42 min' -->

<div class="big"><span class="num">05</span>Live Exercise — Part 2</div>
<div class="desc">Same task — now with structure in place</div>

---

<!-- _footer: '⏱ 32–42 min' -->

# Before &amp; After — Same Task, Different Setup

<div class="subtitle">What the agent produces when it has context</div>
<div class="cols cols-2"><div class="card acc orange"><h3 class="c-orange">WITHOUT instructions</h3><ul class="list"><li>Picked figlet + chalk (wrong version)</li><li>Ignored --style flag entirely</li><li>Used require() + ESM mix — broke on run</li><li>No error handling for missing --name</li><li>Animation flickers on Windows</li><li>6 follow-up prompts to fix</li></ul></div><div class="card acc green"><h3 class="c-green">WITH instructions</h3><ul class="list check"><li>Used correct library (pure Node, no deps)</li><li>All three flags implemented correctly</li><li>CJS throughout — runs on first attempt</li><li>Graceful error for missing --name</li><li>ANSI frames — works cross-platform</li><li>Zero follow-up corrections needed</li></ul></div></div>

---

<!-- _class: section -->
<!-- _footer: '⏱ 42–50 min' -->

<div class="big"><span class="num">06</span>Tools, Skills &amp; MCP</div>
<div class="desc">The agent's full toolkit</div>

---

<!-- _footer: '⏱ 42–50 min' -->

# What the Agent Can Do

<div class="subtitle">Tools are the agent's hands — MCP extends its reach</div>
<div class="cols cols-2"><div class="card acc blue"><div class="icon c-blue">🛠️</div><h3 class="c-blue center">Tools (built-in)</h3><ul class="defs"><li><b>Read / Write files</b><span>Edit source without copy-paste</span></li><li><b>Run terminal commands</b><span>Build, test, install deps</span></li><li><b>Search codebase</b><span>Find patterns across files</span></li><li><b>Open browser</b><span>Fetch docs, validate URLs</span></li></ul></div><div class="card acc teal"><div class="icon c-teal">🔌</div><h3 class="c-teal center">MCP (external)</h3><ul class="defs"><li><b>Always-on services</b><span>GitHub, Jira, Confluence, Azure</span></li><li><b>Retrieve live data</b><span>PRs, issues, wiki pages, logs</span></li><li><b>Push changes</b><span>Create PRs, update tickets</span></li><li><b>Custom connectors</b><span>Your own internal APIs</span></li></ul></div></div>

---

<!-- _footer: '⏱ 42–50 min' -->

# Skills — Knowledge Packs for Agents

<div class="subtitle">Filesystem-based context the agent loads when needed</div>
<div class="cols cols-2"><div class="card acc purple"><div class="icon c-purple">🧠</div><h3 class="c-purple">What is a Skill?</h3><ul class="list purple"><li>A folder with a SKILL.md (instructions) and any reference files</li><li>Agent reads it when the task matches the skill's trigger</li><li>Encapsulates domain knowledge, patterns, constraints</li></ul></div><div class="card"><pre><code>.github/skills/
  ascii-art/
    SKILL.md
    examples/
      fire-example.txt
      matrix-example.txt</code></pre></div></div>
<div class="banner green left"><b>Demo:</b> Create <span class="fname">ascii-art/SKILL.md</span> → use it in Agent mode → agent reads it before generating code</div>
<div class="banner left"><b>Model &amp; Config — Quick Take</b><br><span class="c-muted">Model: speed vs. depth&nbsp;&nbsp;|&nbsp;&nbsp;Context: bigger = more code visible&nbsp;&nbsp;|&nbsp;&nbsp;Effort: high = deliberate output</span></div>

---

<!-- _class: section -->
<!-- _footer: '⏱ 50–56 min' -->

<div class="big"><span class="num">07</span>Agents</div>
<div class="desc">Out-of-the-box &amp; custom — when and which</div>

---

<!-- _footer: '⏱ 50–56 min' -->

# Out-of-the-Box vs. Custom Agents

<div class="subtitle">Pick the right agent for the job</div>
<div class="cols cols-2"><div class="card acc blue"><div class="icon c-blue">🤖</div><h3 class="c-blue center">Out-of-the-Box</h3><ul class="defs"><li><b>Research agent</b><span>Multi-source web search + plan</span></li><li><b>Code review agent</b><span>Static analysis + suggestions</span></li><li><b>PR summary agent</b><span>Diff → readable description</span></li><li><b>Workspace agent</b><span>Index + query your whole codebase</span></li></ul></div><div class="card acc green"><div class="icon c-green">🧪</div><h3 class="c-green center">Custom Agents</h3><ul class="defs"><li><b>Licensed sources</b><span>Exa, Perplexity, MS Docs via MCP</span></li><li><b>Custom tool chain</b><span>Internal APIs, private registries</span></li><li><b>Domain-specific</b><span>Knows YOUR codebase conventions</span></li><li><b>Composable</b><span>Chain multiple agents together</span></li></ul></div></div>
<div class="banner blue italic c-blue">Demo: Research agent → "Find CLI tools for ASCII diagrams and art" → plan → search → validate → code</div>

---

<!-- _class: section -->
<!-- _footer: '⏱ 56–60 min' -->

<div class="big"><span class="num">08</span>What's Next</div>
<div class="desc">RPIV, spec-driven dev, harnesses &amp; Q&amp;A</div>

---

<!-- _footer: '⏱ 56–60 min' -->

# Key Takeaways &amp; What Comes Next

<div class="cols" style="grid-template-columns: 1.15fr 1fr; margin-top: 22px;"><div class="card acc green"><h3 class="c-green">Today's takeaways</h3><ul class="list check"><li>Agent mode needs structure — not just good prompts</li><li>AGENTS.md, copilot-instructions.md, and llm.txt are your briefing docs</li><li>Tools + MCP + Skills give the agent reach without hallucination</li><li>Model &amp; config choices change behaviour, not just speed</li><li>Instructions = reproducible, reviewable, version-controlled</li></ul></div><div class="stack"><div class="mini green"><div class="label c-green">Today</div><div class="name">Structured AI Dev</div></div><div class="mini blue"><div class="label c-blue">Next</div><div class="name">RPIV Framework</div></div><div class="mini teal"><div class="label c-teal">Then</div><div class="name">Spec-Driven Dev</div></div><div class="mini purple"><div class="label c-purple">Future</div><div class="name">Harnesses &amp; Loops</div></div></div></div>

---

<!-- _class: closing -->
<!-- _paginate: false -->
<!-- _footer: 'ISE ASIA-AUSTRALIA  |  Juan Burckhardt  |  juan.burckhardt@microsoft.com' -->

<div class="q">Questions?</div>
<div class="sub">Let's build something together.</div>
<div class="cards"><div class="card acc blue"><h3 class="c-blue">Repo</h3><div class="v">github.com/ise-asia-au/copilot-workshop</div></div><div class="card acc teal"><h3 class="c-teal">Docs</h3><div class="v">docs.github.com/copilot</div></div><div class="card acc purple"><h3 class="c-purple">Contact</h3><div class="v">juan.burckhardt@microsoft.com</div></div></div>
