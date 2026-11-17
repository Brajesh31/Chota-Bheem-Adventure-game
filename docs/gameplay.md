# 🎮 Gameplay Guide

## Objective

Control the character on the game screen and avoid the bull. The score increases when the bull passes the player without a detected collision.

## Start a session

1. Open `index.html` in a modern desktop browser.
2. Select **Lets Run**.
3. The start screen is hidden and the game screen is shown.
4. Background music is requested by the browser after the user action.

## Controls currently implemented

| Key | Current behavior | Notes |
|---|---|---|
| Arrow Up | Adds the jump animation class for a short period | The animation is CSS-driven |
| Arrow Left | Moves the character 112 pixels left | No viewport boundary is enforced |
| Arrow Right | Moves the character 112 pixels right | No viewport boundary is enforced |

The current source does not implement Space, WASD, touch, gamepad, pause, or a settings menu.

## Scoring and collision

The script polls computed positions every 10 milliseconds. A collision is inferred when the horizontal offset is below 50 pixels and the vertical offset is below 40 pixels. A successful crossing increments the score once for the current pass, then re-arms scoring after a delay. The bull animation is made faster after a successful pass.

These are implementation thresholds, not a formal physics model. They may behave differently across viewport sizes and frame rates.

## Game over

On collision, the game-over text changes, game-over audio is requested, the bull animation class is removed, and background audio is paused after a delay. The page does not currently expose a restart control. Reload the page to play again.

## Practical play notes

- Use a desktop keyboard.
- Start the game with a user click so browser audio policies permit playback.
- If the music does not play, check browser tab mute and site audio permissions.
- The page currently prevents body scrolling and is designed primarily for a viewport-sized game screen.

## Known gaps

There is no pause/resume, saved score, difficulty selection, tutorial overlay, mobile touch control, or persistent progress. See [known issues](known-issues.md) and [roadmap](../ROADMAP.md).
