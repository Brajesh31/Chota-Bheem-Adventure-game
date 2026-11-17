# Security Policy

## Supported versions

The current default branch is the maintained development target. There are no versioned releases or long-term support branches. This small static browser game has not received a formal security audit.

## Reporting a vulnerability

Do not publish exploit details, private information, or credentials in a public issue. Use GitHub's private vulnerability reporting for this repository when available. Otherwise, contact `@brajesh31` privately through the contact method on the GitHub profile.

Include the affected commit or file, potential impact, safe reproduction steps, and a way to follow up. No response-time or remediation-time guarantee is made.

Ordinary gameplay issues can be reported publicly using the bug-report form.

## Current security and privacy notes

- The application runs entirely in the browser and has no backend, API, account system, or server-side data store.
- The current game does not require third-party runtime scripts or fonts.
- The game may play local background and game-over audio after a user gesture.
- Node.js dependencies are not required; repository checks use built-in Node modules.
- Never embed private credentials in HTML, CSS, JavaScript, or other public client files.
- Review rights to bundled artwork and audio before redistributing them; see [LICENSE](LICENSE).

For additional detail, see [docs/security.md](docs/security.md).
