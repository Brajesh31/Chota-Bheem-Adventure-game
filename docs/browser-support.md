# 🌐 Browser Support

## Support target

The project targets current desktop browsers with JavaScript, CSS animations, keyboard events, computed styles, and browser audio support. No formal cross-browser compatibility matrix or automated browser test is maintained.

| Environment | Expected status | Notes |
|---|---|---|
| Current Chromium-based desktop browser | Intended target | Verify audio permissions and keyboard handling |
| Current Firefox desktop | Expected to work | Manually verify computed-style parsing and audio |
| Current Safari desktop | Expected to work with checks | Verify local assets and audio behavior |
| Mobile browser | Not a supported control target | No touch controls are implemented |

These are intended targets, not test results. Verify on the actual browser versions before making compatibility claims.

## Browser requirements

- JavaScript enabled.
- CSS animation support.
- DOM and keyboard event support.
- Audio playback permitted after user interaction.
- Local media files available at their expected relative paths.

## Reporting a compatibility issue

Include exact browser version, operating system, screen size, whether the page was opened as a file or served over HTTP, and console/network errors.
