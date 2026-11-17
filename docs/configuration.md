# ⚙️ Configuration

## Current configuration surface

The current project has no runtime configuration system. There are no environment variables, server settings, feature flags, database settings, or secrets.

| Setting | Current value/source |
|---|---|
| Start-screen text | `index.html` |
| Font stylesheet | Google Fonts Ubuntu URL in `index.html` |
| Background and sprite paths | `style.css` |
| Jump animation duration/height | `style.css` keyframes |
| Obstacle animation duration | `style.css` and runtime style changes in `script.js` |
| Collision thresholds/poll interval | `script.js` |
| Keyboard bindings | `script.js` |
| Audio file paths | `script.js` |

## Environment variables

`.env.example` documents that none are consumed. Environment files are not read by a browser page. Any value embedded into public HTML or JavaScript is visible to visitors and must not be treated as a secret.

## Changing values safely

When changing controls, scoring thresholds, animation dimensions, or asset paths, update the relevant gameplay and architecture documentation and run the manual checklist in [testing.md](testing.md).
