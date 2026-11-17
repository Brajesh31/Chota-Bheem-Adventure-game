# ⚡ Performance Notes

## Current runtime

- Gameplay checks run through a single `requestAnimationFrame` loop while the session is active.
- The loop reads two DOM rectangles and applies pure geometry helpers.
- Pausing and ending cancel the pending animation frame.
- Animated GIFs are used for the jungle, player, and obstacle during normal-motion play.
- Audio is loaded from local MP3 files.
- No runtime JavaScript dependencies are downloaded.

## Practical trade-offs

The game relies on browser rendering and CSS animation timing. The animation-frame loop is synchronized with visual updates, but frame scheduling can vary with device load and background-tab throttling. GIF decoding and file sizes can affect memory and CPU usage.

## Improvement ideas

- Measure media dimensions and file sizes before compressing or replacing artwork.
- Consider a sprite sheet or optimized video-free animation format only when rights and visual quality permit.
- Profile collision checks on lower-powered mobile devices.
- Avoid adding polling loops or additional animation callbacks.
- Preserve the explicit pause/end cleanup behavior.

## Measurement

Record browser, device, viewport, media sizes, and observed frame behavior before and after a performance change. No benchmark or performance score has been published.
