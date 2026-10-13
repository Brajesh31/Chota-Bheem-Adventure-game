# Deployment

## Current deployment model

The game is a static page. A web host can serve `index.html`, `style.css`, `script.js`, and the referenced media files directly. There is no server process, API, database, or build output.

## Publish the static files

1. Keep all referenced assets at their current relative paths.
2. Upload the project files to a static hosting provider using its normal static-site workflow.
3. Use HTTPS and confirm the page and assets load at the published URL.
4. Check the Google Fonts request and browser audio behavior in the target environment.

No SPA route fallback is required because the page does not define client-side routes.

## Rights check

Before making the game public or redistributing a copy, confirm you have permission to distribute every image, animation, audio track, and branded element. The root [LICENSE](../LICENSE) grants MIT rights only to the original source and documentation and expressly excludes those media files.
