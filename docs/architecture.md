# Architecture

## Overview

This is a static browser game built with HTML, CSS, and classic JavaScript. The browser loads `index.html`, which links `style.css` and `script.js`. All game state remains in the page and local JavaScript variables.

```text
Browser
  -> index.html (start screen and hidden game screen)
  -> style.css (layout, backgrounds, keyframe animations)
  -> script.js (start action, keyboard controls, collision loop, score, audio)
  -> local PNG/GIF/MP3 assets
```

There is no application server, API, database, package manager, or build pipeline.

## Source files

- `index.html`: defines the start button, game area, score, character/obstacle elements, overlay markup, and script/style references.
- `style.css`: styles the start and game screens, positions Bheem and the bull, and defines jump and obstacle animations.
- `script.js`: waits for DOM readiness, switches screens, starts background music, registers keyboard input, runs collision/score checks, and plays game-over audio.
- `frontPage.png`, `jungle.png`, `jungle.gif`, `bheem.png`, `bheem.gif`, `bull.png`, and `bull.gif`: visual assets referenced by the page or styles.
- MP3 files: background and game-over audio assets.

The current CSS uses `frontPage.png`, `jungle.gif`, `bheem.gif`, and `bull.gif`. The HTML overlay references `bheem.gif` but the script never displays that overlay. `jungle.png`, `bheem.png`, `bull.png`, `bheem punch.gif`, and `music.mp3` are present in the repository but are not referenced by the current page, styles, or script.

## Game lifecycle

The start button hides `#startPage`, displays `#gamePage`, and calls `startGame`. The game uses an interval that runs every 10 ms to read computed positions, compare the player and bull offsets, detect collision, and increment score when the obstacle passes. The bull's CSS animation starts at the right side of the viewport and moves left. An Up key adds the jump class briefly; Left and Right adjust the character's CSS `left` value.

## Current lifecycle defects

The interval and keyboard listener are not stored for cleanup. On collision, the bull animation is removed and the game-over text changes, but the interval remains active and can continue processing collisions. There is no in-page restart, and another start attempt would add more listeners and intervals. The UI tells the player to reload.

## External resources and media

The HTML references a Google Fonts stylesheet; all game images, GIFs, and audio are local files. The browser needs internet only for the remote font. Rights to the branded character artwork and media are not established by this repository; the MIT grant in [LICENSE](../LICENSE) excludes them.
