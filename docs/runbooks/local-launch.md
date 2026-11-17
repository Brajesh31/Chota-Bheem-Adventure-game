# Runbook: Local Launch

1. Clone or download the repository.
2. Open a terminal in the repository root.
3. Start a static HTTP server: `python -m http.server 8000`.
4. Visit `http://localhost:8000`.
5. Confirm the favicon and start screen load.
6. Start a game and verify keyboard or on-screen controls.
7. Test pause/resume, collision, Play Again, and Back to Start.
8. Check the browser console for module-loading or missing-asset errors.
9. Run `npm test` and `npm run validate` with Node.js 22+ when validating a code change.

The native JavaScript ES module should be tested through HTTP rather than opened directly from `file://`.
