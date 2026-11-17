# Deployment

## Deployment type

The project is a static browser application using a native JavaScript ES module. It can be published on static hosting that serves HTML, CSS, JavaScript, SVG, images, GIFs, and MP3 files over HTTP(S). No backend process or database is needed.

## Publish the runtime files

Keep the relative structure and upload:
- `index.html`
- `style.css`
- `script.js`
- `game-logic.js`
- `favicon.svg`
- Referenced images, GIFs, and audio files

The host must serve `.js` as a JavaScript MIME type so browsers accept the module. A modern static host normally configures this automatically.

## Deployment steps

1. Set the publish root to the project directory containing `index.html`.
2. Upload the runtime files and all referenced assets without renaming them.
3. Enable HTTPS.
4. Open the published URL in a fresh browser session.
5. Verify the start screen, module loading, keyboard and touch controls, collision, scoring, pause/resume, restart, and media requests.
6. Check the browser console and network panel.

No SPA route fallback or server-side environment variables are required.

## Rights check

Before making the game public or redistributing a copy, confirm permission to distribute every image, animation, audio track, and branded element. The root [LICENSE](../LICENSE) grants MIT rights only to the original source and documentation and excludes the bundled character and media files.

## Rollback

Redeploy the previous known-good static artifact or source revision. See [runbooks/deployment-rollback.md](runbooks/deployment-rollback.md).
