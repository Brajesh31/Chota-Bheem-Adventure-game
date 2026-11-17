# 🎮 Chota Bheem Adventures

A browser-based jungle obstacle game built with **HTML, CSS, and vanilla JavaScript**. Start a run, move the player, jump over the moving bull, and build a score by surviving each pass.

<p align="center">
  <img src="frontPage.png" alt="Start screen artwork from the bundled game assets" width="720">
</p>

<p align="center">
  <a href="https://github.com/Brajesh31/Chota-Bheem-Adventure-game/actions/workflows/quality-checks.yml"><img src="https://github.com/Brajesh31/Chota-Bheem-Adventure-game/actions/workflows/quality-checks.yml/badge.svg" alt="Repository quality checks"></a>
  <img src="https://img.shields.io/badge/HTML5-static-orange?logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-responsive-blue?logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES%20modules-yellow?logo=javascript" alt="JavaScript ES modules">
  <img src="https://img.shields.io/badge/Dependencies-zero-brightgreen" alt="Zero runtime dependencies">
  <img src="https://img.shields.io/badge/Tests-Node%20built--in-blue" alt="Node built-in tests">
</p>

<p align="center"><b>Static browser game · Keyboard + touch controls · Pause and restart · No backend</b></p>

> **Status:** Playable browser prototype. The game now includes a managed session loop, collision stop, bounded movement, scoring, difficulty limits, pause/resume, restart, touch controls, and reduced-motion handling. Browser-level visual and assistive-technology testing remains a manual task.

## 📑 Contents

- [✨ Features](#-features)
- [🕹️ Controls](#️-controls)
- [🚀 Run locally](#-run-locally)
- [🧠 Game flow](#-game-flow)
- [🧪 Tests and validation](#-tests-and-validation)
- [🗂️ Project structure](#️-project-structure)
- [♿ Accessibility](#-accessibility)
- [⚠️ Remaining limitations](#️-remaining-limitations)
- [🛡️ Security and licensing](#️-security-and-licensing)
- [🤝 Contributing](#-contributing)
- [📚 Documentation](#-documentation)

## ✨ Features

| Feature | Behavior |
|---|---|
| 🏃 Game loop | One `requestAnimationFrame` loop per active session |
| 💥 Collision | Inset rectangular hitboxes; game-over transition happens once |
| 🏆 Score | One point per successfully cleared obstacle |
| 📈 Difficulty | Obstacle accelerates with a lower animation-duration limit |
| ↔️ Movement | Keyboard and on-screen controls, clamped to game bounds |
| ⏸️ Pause/resume | Suspends the loop, obstacle and background audio |
| 🔁 Restart | Resets score, player position, obstacle and audio state |
| 📱 Touch input | On-screen left, jump and right controls |
| ♿ Reduced motion | Static jungle background and reduced animation |
| 🔊 Audio fallback | Playback errors are caught; the game remains playable |
| 🧪 Unit tests | Pure game-logic helpers tested by Node's built-in runner |

## 🕹️ Controls

| Input | Action |
|---|---|
| ⬆️ Arrow Up or Space | Jump |
| ⬅️ Arrow Left | Move left |
| ➡️ Arrow Right | Move right |
| On-screen Left / Jump / Right | Touch or mouse controls |
| Pause | Pause the active session |
| Resume | Continue the same session |
| Play Again | Start a fresh session after game over |
| Back to Start | Stop the session and return to the title screen |

The game pauses when the browser tab becomes hidden. Resume manually when you return.

## 🚀 Run locally

### Play the game

The game uses native JavaScript modules. A local HTTP server is the most reliable way to run it.

```bash
git clone https://github.com/Brajesh31/Chota-Bheem-Adventure-game.git
cd Chota-Bheem-Adventure-game
python -m http.server 8000
```

Open **http://localhost:8000**.

No npm install, backend, database, API key, or external JavaScript library is needed to play. The game uses local assets and system fonts.

### Run developer checks

For tests, install Node.js 22 or later:

```bash
npm test
npm run validate
npm run check
```

There are no third-party npm dependencies. `npm test` runs Node's built-in test runner. `npm run validate` checks required files, local Markdown links, and local runtime asset references.

## 🧠 Game flow

<p align="center">
  <img src="docs/assets/game-loop.svg" alt="Game session flow: start, gameplay loop, score or collision, restart" width="900">
</p>

The controller uses one animation-frame loop while the game is active. A collision cancels the loop and pauses the obstacle. A successful pass increments the score once. Pause suspends the session; restart initializes a fresh session.

The source is split into browser behavior and pure logic:

- `script.js`: DOM, controls, audio, session state, and animation loop.
- `game-logic.js`: collision geometry, obstacle pass detection, movement bounds, hitbox inset, and difficulty calculation.
- `tests/game-logic.test.js`: unit tests for the pure helpers.

## 🧪 Tests and validation

Current automated coverage includes geometry intersection, obstacle pass detection, player clamping, difficulty limits, and hitbox insets.

GitHub Actions also checks:
- JavaScript syntax.
- Required repository files and local references.
- Markdown links.
- YAML workflow and issue forms.
- Non-empty Mermaid diagrams.

**Not automated:** actual browser rendering, sound playback, mobile device testing, cross-browser gameplay, screenshots, or WCAG conformance. Follow [docs/testing.md](docs/testing.md) for the manual regression checklist.

## 🗂️ Project structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── DISCUSSION_TEMPLATE/
│   ├── workflows/
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── assets/
│   ├── diagrams/
│   ├── runbooks/
│   └── templates/
├── tests/
│   └── game-logic.test.js
├── scripts/
│   └── validate-repository.mjs
├── index.html
├── style.css
├── script.js
├── game-logic.js
├── favicon.svg
└── local image, GIF and audio assets
```

## ♿ Accessibility

Semantic buttons, keyboard focus indicators, live score/status announcements, touch controls, and a reduced-motion treatment are implemented. A formal screen-reader and WCAG conformance audit has **not** been completed. See [docs/accessibility.md](docs/accessibility.md).

## ⚠️ Remaining limitations

- Collision still uses simplified rectangular hitboxes, not a per-pixel physics model.
- Touch movement is discrete rather than press-and-hold.
- No saved high score, user profile, leaderboard, or multiplayer service.
- Game balance needs playtesting across device sizes.
- Automated tests do not exercise the actual browser DOM, CSS animations, or audio.
- The bundled branded character artwork and music have no documented redistribution grant in this repository.

See [docs/known-issues.md](docs/known-issues.md) and [ROADMAP.md](ROADMAP.md).

## 🛡️ Security and licensing

This is a static client-side project. Never place credentials in browser files. There is no application backend or data store. See [SECURITY.md](SECURITY.md) and [docs/security.md](docs/security.md).

The root MIT license is attributed to **Brajesh Kumar (@brajesh31)** and applies only to original source code and documentation. It expressly excludes the Chota Bheem character, related trademarks, third-party images/GIFs, and audio. Verify rights before redistributing any such assets. See [LICENSE](LICENSE).

## 🤝 Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md), follow the [Code of Conduct](CODE_OF_CONDUCT.md), and use the GitHub issue and pull-request templates. Record permissions for all new media contributions.

## 📚 Documentation

Start with the [documentation hub](docs/README.md). It links setup, gameplay, architecture, API boundary, configuration, data model, assets, testing, accessibility, browser support, security, performance, troubleshooting, release guidance, seven diagrams, six operational runbooks, and eight reusable templates.

---

<p align="center">Made with ❤️ using HTML, CSS, and JavaScript.</p>

Last updated: 2026-11-17 11:56 UTC
