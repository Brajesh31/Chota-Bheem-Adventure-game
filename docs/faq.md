# FAQ

## How do I start the game?

Clone the repository, run `python -m http.server 8000` in its root, and open `http://localhost:8000`. The ES module entry point may not load when the page is opened directly from a local file.

## Which keys control the player?

Up or Space jumps. Left and Right move horizontally. On-screen Left, Jump, and Right buttons are also available.

## How is the score increased?

A point is awarded after the obstacle fully clears the player's hitbox. Each obstacle pass can be counted once.

## How do I pause and resume?

Use the Pause button. It suspends the game loop, obstacle animation, and background music. Select Resume to continue.

## How do I play again after game over?

Select Play Again. The game resets the score, player position, obstacle animation, and audio. Back to Start returns to the title screen.

## Does the game save my score?

No. Score and game state exist only for the current page session.

## Does the game need a backend or internet?

No backend is required. The game uses local HTML, CSS, JavaScript, image, GIF, and audio files. The remote Google Fonts stylesheet was removed.

## How do I run tests?

Use Node.js 22 or later and run `npm test` from the repository root. The game itself does not need npm dependencies.

## Are the game assets included in the MIT license?

No. The MIT grant covers original source and handbook content by Brajesh Kumar. Existing images, GIFs, audio, and related branding are excluded because their reuse rights are not established in this repository. See [LICENSE](../LICENSE).
