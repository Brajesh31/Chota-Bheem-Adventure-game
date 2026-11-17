# 🧠 Decision Log

This log records current engineering choices visible in the project. It is not a record of formal stakeholder approvals.

## DEC-001: Static browser implementation

**Status:** Current

The game is built with HTML, CSS, and native JavaScript modules. No backend, build system, or runtime dependency is required. Node.js is used only for tests and repository checks.

**Trade-off:** The game has no remote score persistence or shared player accounts.

## DEC-002: CSS-driven artwork movement

**Status:** Current

CSS keyframes animate the player jump and obstacle movement. JavaScript reads rendered rectangles to determine collision and completed passes.

**Trade-off:** Gameplay feel depends on CSS geometry and browser rendering. Hitboxes use an inset rectangle approximation.

## DEC-003: One animation-frame loop per session

**Status:** Current

The controller starts one requestAnimationFrame loop and cancels it on pause, collision, or return to title. A new loop begins on resume.

**Trade-off:** Collision checks remain coupled to the current DOM layout and CSS animation.

## DEC-004: Pure game logic separated for unit testing

**Status:** Current

Geometry, position clamping, obstacle pass detection, hitbox inset, and difficulty duration live in `game-logic.js` and are tested with Node's built-in test runner.

**Trade-off:** Browser integration, real audio, and visual behavior still need manual tests.

## DEC-005: Local assets and no remote font request

**Status:** Current

The game uses local media and system fonts. The external Google Fonts stylesheet was removed to reduce runtime network dependence.

**Trade-off:** The appearance may vary slightly across platforms due to system font differences.
