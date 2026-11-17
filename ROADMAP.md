# Roadmap

This is a directional plan for the current static browser game. It has no delivery dates and does not promise that an item will be implemented.

## ✅ Implemented in the current source

- [x] Stop the game loop on collision, pause, and return to title.
- [x] Add a restart action and explicit game-over panel.
- [x] Add touch-friendly on-screen movement and jump controls.
- [x] Bound player horizontal movement to the game area.
- [x] Add a minimum obstacle animation duration.
- [x] Catch browser audio playback failures without stopping gameplay.
- [x] Respect reduced-motion preference with a static background and slower motion.
- [x] Add unit tests for pure collision, movement, and difficulty helpers.
- [x] Add repository validation and CI checks.

## 🔜 Possible next improvements

- [ ] Confirm rights to all current character art and audio, or replace them with original/licensed assets.
- [ ] Tune collision hitboxes and jump timing through repeatable playtesting.
- [ ] Add browser automation for Chromium and Firefox.
- [ ] Run a screen-reader and WCAG-focused accessibility review.
- [ ] Consider a nonvisual or simplified alternative gameplay mode.
- [ ] Consider optional session high scores with a clear reset control and privacy documentation.
- [ ] Add press-and-hold movement support after validating touch interaction behavior.

## Propose work

Open an issue describing the player problem, expected behavior, and browser/platform impact. Follow [CONTRIBUTING.md](CONTRIBUTING.md). Priorities may change as the project evolves.
