# 🌐 Browser Support

## Intended support

The game targets current desktop and mobile browsers with ES modules, CSS animations, DOM events, `requestAnimationFrame`, audio playback, and touch/click handling.

| Environment | Intended status | Verification required |
|---|---|---|
| Current Chromium desktop | Primary target | Keyboard, layout, audio, reduced motion |
| Current Firefox desktop | Intended | ES module loading, collision feel, audio |
| Current Safari desktop | Intended | Audio gesture handling, CSS animation, focus |
| Current Android browser | Touch target | On-screen controls, narrow layout, audio |
| Current iOS Safari | Touch target | Touch button behavior, viewport height, audio |

This is a support intention, not a claim that every listed browser version has been tested. The repository CI runs Node.js unit tests and validation, not browser automation.

## Runtime requirements

- JavaScript modules enabled.
- CSS animations and DOM geometry APIs supported.
- Local PNG/GIF/MP3 assets served with the site.
- Audio playback permitted by the browser after a user gesture.

## Reporting compatibility problems

Include the exact browser/version, OS/device, viewport size, whether the page was opened directly or served over HTTP, control method, and safe console/network errors.
