# 🧑‍💻 Development Guide

## Requirements

- A current desktop browser.
- Node.js 22 or later for the repository validation and test commands.
- A local clone of this repository.

The playable game does not need Node.js or npm. Node is used only for the development checks. There are no third-party npm dependencies.

## Start the game

Open `index.html` directly, or serve the project root:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Run quality checks

```bash
npm test
npm run validate
npm run check
```

- `npm test` runs the Node.js built-in test runner.
- `npm run validate` checks required files, local Markdown links, and local runtime assets.
- `npm run check` runs both checks.

No `npm install` is required because the project has no external npm dependencies.

## Code organization

- Keep browser DOM and audio behavior in `script.js`.
- Keep deterministic calculations in `game-logic.js` so they can be tested without a browser.
- Add focused unit tests under `tests/`.
- Keep the browser application static unless a real requirement justifies a backend.
- Preserve local relative paths for the artwork and audio.

## Input and lifecycle rules

- Use one animation loop per active game session.
- Stop the loop on collision, pause, and return to title.
- Reset score, position, difficulty, and audio when starting a new session.
- Ignore gameplay input while paused or after game over.
- Keep player movement within the game container.
- Treat `prefers-reduced-motion` as a real user preference.
- Keep all controls reachable by keyboard and touch.

## Asset and license rules

Do not add artwork, character illustrations, music, sound effects, or fonts unless redistribution rights are documented. The root MIT grant excludes the existing branded media. Use [asset-rights-record.md](templates/asset-rights-record.md) for proposed media contributions.

## Pull requests

Describe the behavior changed and browser/manual checks completed. Update gameplay, architecture, testing, troubleshooting, and README documentation when user-visible behavior changes.
