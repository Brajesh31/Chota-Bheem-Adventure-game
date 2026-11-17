# Runbook: Game-over Investigation

1. Reproduce the collision using a consistent viewport and input sequence.
2. Note browser/version, viewport dimensions, input method, and approximate score.
3. Confirm the game-over panel appears once and reports the final score.
4. Confirm the obstacle remains paused and the score no longer changes.
5. Inspect the browser console for audio or runtime errors.
6. Select Play Again and verify the score and obstacle animation reset.
7. Select Back to Start and confirm the audio stops.

The current controller cancels its animation-frame loop when the session ends. If repeated game-over behavior appears, capture the commit and exact reproduction steps as a regression report.
