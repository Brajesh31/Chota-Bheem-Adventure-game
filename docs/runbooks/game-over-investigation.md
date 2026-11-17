# Runbook: Game-over Investigation

1. Reproduce the collision using a consistent viewport and input sequence.
2. Note the browser, viewport dimensions, and approximate score.
3. Inspect the game-over message and whether the bull animation stops.
4. Check whether repeated audio or repeated game-over handling occurs.
5. Inspect timer activity and console output.
6. Reload to reset the current page session.

The current interval is not explicitly cleared on collision. Repeated processing after game over is a known issue, not evidence that the browser has failed.
