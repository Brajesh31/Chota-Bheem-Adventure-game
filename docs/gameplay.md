# 🎮 Gameplay Guide

## Objective

Avoid the moving bull for as long as possible. Each obstacle pass that clears the player without collision increases the score.

## Start a session

1. Open `index.html` in a current browser.
2. Select **Let's Run**.
3. Use keyboard controls or the on-screen buttons.
4. Watch the score in the upper corner.

## Controls

| Input | Action |
|---|---|
| Arrow Up | Jump |
| Space | Jump |
| Arrow Left | Move left |
| Arrow Right | Move right |
| On-screen Left | Move left |
| On-screen Jump | Jump |
| On-screen Right | Move right |
| Escape | Toggle pause/resume |
| Pause | Pause the session |
| Resume | Continue the paused session |

The on-screen controls are available for touch devices as well as mouse users. The game does not currently support gamepads or custom key bindings.

## Scoring and difficulty

A score point is awarded after the obstacle fully clears the player's horizontal hitbox. Each pass can be counted only once. Obstacle movement gradually speeds up as the score rises, but the animation duration has a lower bound so difficulty cannot accelerate indefinitely.

## Collision and game over

The game uses inset rectangular hitboxes to limit false collision detections from transparent artwork margins. On collision, the active animation loop stops, background audio pauses, game-over audio is requested, and the final score is displayed.

## Pause and restart

- **Pause** suspends the animation loop and obstacle movement and pauses background music.
- **Resume** continues the current session.
- **Play Again** resets the score, position, audio and obstacle animation.
- **Back to Start** stops the session and returns to the title screen.

When the browser tab becomes hidden, the game pauses automatically. Select Resume after returning.

## Audio

Audio begins only after a player action. Some browsers or user settings may block playback. The game continues without audio and displays a brief message if playback is unavailable.

## Reduced motion

When the operating system or browser requests reduced motion, the game uses the static jungle background and a slower obstacle animation with a shorter jump movement.
