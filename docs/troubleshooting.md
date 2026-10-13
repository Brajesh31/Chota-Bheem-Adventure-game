# Troubleshooting

## Images or audio do not load

- Keep all files in their repository-relative locations and preserve spaces in filenames such as `Chota Bheem - BGM.mp3`.
- Check browser developer tools for missing-file errors.
- If opening `index.html` directly fails to load an asset, serve the project directory through a local static file server.
- The Google-hosted font needs internet; the rest of the referenced media is local.

## Music does not play

Click the start button before expecting background audio. Browser policies, muted tabs, system volume, or missing audio files can prevent playback. The script does not handle a rejected `audio.play()` promise.

## The character moves offscreen

The current Left/Right handlers add or subtract 112 pixels without checking the viewport. Reload the page to reset the position.

## The game continues processing after collision

The collision interval is not cleared. The bull animation stops, but the interval can keep detecting the same collision and replaying game-over behavior. Reload the page to start a new session.

## Score or obstacle speed behaves unexpectedly

Score is updated in a 10 ms interval using computed style offsets. Successful passes trigger a delayed animation-duration reduction. The code does not impose a minimum duration, and timing can vary by browser/device.

## How do I restart?

Reload the browser page. There is no restart button in the current implementation.
