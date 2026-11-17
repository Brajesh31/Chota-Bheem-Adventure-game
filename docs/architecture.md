# 🧠 Architecture

## Overview

Chota Bheem Adventures is a static browser game built with HTML, CSS, and native JavaScript modules. No application server or third-party runtime library is required. The browser loads the page, stylesheet, game controller, pure game-logic helpers, and local media.

```text
index.html
  ├── style.css
  └── script.js (ES module)
        └── game-logic.js (pure, tested helpers)

Local files:
  ├── frontPage.png
  ├── jungle.gif / jungle.png
  ├── bheem.gif
  ├── bull.gif
  └── MP3 audio
```

## Runtime modules

| File | Responsibility |
|---|---|
| `index.html` | Start screen, game screen, game status, score, touch controls, pause and game-over actions |
| `style.css` | Responsive layout, sprite positioning, animations, focus styles, and reduced-motion behavior |
| `script.js` | Browser lifecycle, input, audio, animation scheduling, collision checks, pause/resume, and restart |
| `game-logic.js` | Pure geometry, obstacle-pass, clamping, hitbox, and difficulty helpers |
| `tests/game-logic.test.js` | Node.js built-in unit tests for the pure helpers |
| `scripts/validate-repository.mjs` | Required-file, Markdown-link, and runtime-asset validator |

## Game lifecycle

1. The start screen is visible, and the game screen is hidden.
2. Starting resets the score, player position, obstacle animation, audio state, and game-over panel.
3. A single `requestAnimationFrame` loop reads the player's and obstacle's hitboxes.
4. An overlap ends the session once, stops the loop, pauses the obstacle, and presents the final score.
5. A cleared obstacle increments the score once per pass. Difficulty increases with a lower animation-speed limit.
6. Pause cancels the animation loop and pauses the obstacle and background music. Resume continues the same session.
7. Play Again resets the session. Back to Start stops the current session and returns to the title screen.

## Collision model

Collision uses axis-aligned rectangles derived from `getBoundingClientRect()`. Each rectangle is inset by 18% on all sides to reduce false positives caused by transparent padding in the artwork. This is an intentionally simple arcade hitbox, not a physical simulation.

## State and persistence

Score and session flags exist only in memory. No score, identifier, or player profile is saved to local storage, cookies, or a server. Closing or reloading the page resets progress.

## Asset mapping

The live interface uses `frontPage.png`, `jungle.gif`, `bheem.gif`, `bull.gif`, `Chota Bheem - BGM.mp3`, and `gameover.mp3`. Other tracked PNG/GIF/MP3 variants are retained but are not used by the current runtime. See [assets.md](assets.md).

## External resources

The Google Fonts request has been removed. The interface uses local system-font stacks and can run without a third-party stylesheet request. Media remains local to the repository.

## Design boundaries

There is no HTTP API, database, server-side session, account system, analytics integration, or leaderboard. A future online feature would require a separate service architecture and privacy/security review.
