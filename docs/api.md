# 🔌 API and Integrations

## HTTP API
There is no application API. The repository contains no backend routes, HTTP client, server-side handlers, or database connection.

## Third-party network request
The HTML requests the Ubuntu font stylesheet from Google Fonts. This is an external browser request and may be blocked by network policy, privacy extensions, or offline use. CSS includes generic font fallbacks.

## Browser APIs used
- DOM event listeners for page readiness, button click, and keyboard input.
- `window.getComputedStyle` to read animated element positions.
- `setInterval` and `setTimeout` for polling and timing.
- `Audio` for background and game-over playback.
- CSS animations for character jumping and obstacle movement.

## Not implemented
No authentication, user profiles, leaderboard API, analytics, payment integration, cloud save, or multiplayer service exists. Any future integration must document data sent, purpose, retention, consent, security controls, and failure behavior.
