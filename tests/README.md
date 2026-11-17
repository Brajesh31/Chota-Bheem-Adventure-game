# 🧪 Test Suite

The project uses Node.js's built-in `node:test` and `node:assert` modules. No third-party test framework is installed.

## Run

```bash
npm test
```

## Current coverage

`game-logic.test.js` checks:
- Rectangle intersection.
- Obstacle pass detection.
- Position clamping.
- Obstacle animation duration and its lower bound.
- Hitbox inset calculations.

## What is not covered

The test suite does not instantiate a browser DOM or verify CSS animations, audio playback, touch event behavior, visual layout, or screen-reader output. Those remain manual browser checks described in [docs/testing.md](../docs/testing.md).

When new pure game logic is added, place it in `game-logic.js` and add deterministic tests here. Avoid tests that depend on real-time animation or arbitrary sleeps.
