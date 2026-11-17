# Troubleshooting

## A local image or sound does not load

- Keep the runtime files in their repository-relative locations.
- Preserve spaces and capitalization in file names such as `Chota Bheem - BGM.mp3`.
- Open browser developer tools and inspect the Network panel for 404 responses.
- If direct file opening behaves inconsistently, serve the project root with `python -m http.server 8000`.

The game no longer requires a remote font stylesheet. Its font stack is local.

## Browser refuses to load the JavaScript module

Serve the repository through a local HTTP server rather than opening the file directly. Some browser/file combinations restrict ES module loading from `file://`.

## Music does not play

Start the game with the visible button. Check tab mute, site audio permissions, system volume, output device, and the Network panel. The game should remain playable without audio.

## The character seems to collide too early

The game uses inset rectangles based on rendered player and obstacle bounds. Try a consistent viewport and record the exact case. The hitbox ratio can be tuned in `script.js`, and the pure inset helper is covered by unit tests.

## Movement does not respond

Gameplay input is ignored before the game starts, while paused, and after game over. Use the arrow keys or on-screen buttons during an active session.

## The page is paused after switching tabs

The game pauses when the document becomes hidden. Return to the tab and select **Resume**.

## Score or obstacle speed looks wrong

A point is awarded once the obstacle fully clears the player hitbox. The animation duration decreases with the score, but it is bounded. Run `npm test` to verify the pure scoring helpers and report browser-specific behavior separately.

## How do I restart?

Select **Play Again** on the game-over panel. **Back to Start** returns to the title screen.
