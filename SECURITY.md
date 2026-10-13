# Security Policy

## Supported versions

No release or support matrix is published. Reports should identify the affected commit or current default branch. This small browser game has not received a security audit.

## Reporting a vulnerability

Do not publish exploit details, private information, or credentials in a public issue. Use GitHub's private vulnerability reporting for this repository when available. Otherwise, contact `@brajesh31` privately through the contact method on the GitHub profile. Include the affected file, impact, reproduction steps, and a safe way to follow up. A maintainer will coordinate a response when possible; no response-time guarantee is made.

Ordinary gameplay issues can be reported publicly. Do not include real credentials as proof.

## Current security and privacy notes

- The game has no application server, account system, API, or persistent storage.
- The browser loads the Ubuntu font stylesheet from Google Fonts, which makes a request to that external provider.
- The game plays bundled audio after the user starts it. Browser audio settings and autoplay policies can affect playback.
- `script.js` logs key names to the browser console. Do not add logging of personal or sensitive input.
- Review rights to bundled art and audio before redistributing the page or its assets; see [LICENSE](LICENSE).
