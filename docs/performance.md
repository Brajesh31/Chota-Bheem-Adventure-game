# ⚡ Performance Notes

## Current behavior

- The collision loop runs every 10 milliseconds, approximately 100 callbacks per second when the browser schedules them on time.
- Each loop reads computed CSS values for the player and obstacle.
- The game uses animated GIFs for the jungle, player, and bull.
- Background music is loaded as an MP3.
- The stylesheet sizes the game background to the viewport.

## Practical implications

The polling frequency and repeated computed-style reads are potentially more work than this small game needs. Actual performance depends on browser scheduling, asset dimensions, GIF decoding, and device capabilities. No benchmark has been run for this repository.

## Improvement ideas

- Replace frequent position polling with animation-frame-based updates or a more explicit game loop.
- Use a single game-session state object and stop the loop on game over.
- Consider sprite sheets or optimized static images where the visual result permits.
- Avoid repeated style recalculation by keeping numeric positions in JavaScript.
- Optimize media only after measuring file size and visual quality.
- Add a reduced-motion option.

## Measurement

Record browser, device, viewport, asset sizes, CPU usage, and frame behavior before and after a performance change. Do not publish unsupported performance claims.
