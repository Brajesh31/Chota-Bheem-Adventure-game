# API Reference

This project has no HTTP API, network protocol, or application endpoint. Gameplay runs in the browser using local DOM elements, CSS animations, keyboard events, timers, and bundled media.

## Browser interactions

| Input/event | Current effect |
| --- | --- |
| Click `#startButton` | Hide start screen, show game, and call `startGame()` |
| `ArrowUp` keydown | Add the jump animation class briefly |
| `ArrowLeft` keydown | Subtract 112 pixels from the character's computed left position |
| `ArrowRight` keydown | Add 112 pixels to the character's computed left position |
| Game interval | Check character/obstacle offsets and update score or game-over state |

No data is sent to a server. There is no API key or request configuration.
