# 🔌 API and Integrations

## HTTP API

There is no application API. The repository has no backend routes, HTTP client, server-side handlers, or database connection.

## External network requests

The Google Fonts stylesheet was removed. The current game does not require a third-party runtime request. Images, GIFs, audio, HTML, CSS, and JavaScript are loaded from the same static project.

## Browser APIs used

- DOM event listeners for page readiness, buttons, keyboard input, and visibility changes.
- `Element.getBoundingClientRect()` for rendered hitbox geometry.
- `requestAnimationFrame` and `cancelAnimationFrame` for the game loop lifecycle.
- `setTimeout` and `clearTimeout` for the jump animation state.
- `Audio` for background and game-over playback.
- CSS animations for jumping and obstacle movement.
- `matchMedia` through CSS media queries for reduced-motion preference.

## Not implemented

No authentication, user profiles, leaderboard API, analytics, payment integration, cloud save, or multiplayer service exists. A future integration must document data sent, purpose, retention, consent, security controls, and failure behavior.
