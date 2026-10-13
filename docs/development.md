# Development

## Project workflow

The project has no build system, package manager, or automated test command. Edit `index.html`, `style.css`, or `script.js`, then reload the page in a browser. A local static file server can be used when browser policies interfere with asset loading.

## Main behavior

- The start-button listener switches from the title screen to the game and starts audio/game logic.
- Keyboard handling uses Up for a temporary jump class and Left/Right to change the character's position.
- A 10 ms interval reads computed style positions and compares horizontal/vertical offsets for collision.
- A successful obstacle crossing increments the score and reduces the bull animation duration by 0.1 seconds.
- On collision, the game-over text changes, the bull animation class is removed, the game-over audio plays, and background audio is paused after a delay.

## Suggested manual checks

The repository has no test harness. After changing game behavior, manually check:

- Starting from the title screen and music behavior
- Each arrow-key action
- Collision and game-over behavior
- Score updates on a successful pass
- Repeated play/reload behavior
- Narrow and wide viewport rendering
- Asset loading with and without internet access

Report only the checks you actually performed.

## Known implementation issues

- `script.js` assigns several variables without declarations, creating implicit globals in the current classic-script context.
- The collision interval and keyboard listener are not cleaned up after game over.
- The bull's animation duration is reduced after successful passes without a lower bound.
- Player movement is not constrained to the viewport.
- The `#overlay` markup is present but not used by the current script.

Address these as focused behavior changes and update the README and docs.

## Assets and rights

Do not add or redistribute artwork, character images, music, or fonts without permission. The existing MIT grant excludes bundled media of uncertain provenance. See [LICENSE](../LICENSE).
