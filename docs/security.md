# 🔐 Security and Privacy Notes

## Application profile
This is a static browser game. It currently has no application server, authentication, database, account management, server-side secrets, application cookies, or persistent player profile.

## External requests
The HTML loads the Ubuntu font stylesheet from Google Fonts. This request discloses normal request metadata to that provider, such as the visitor's IP address and browser request headers. The remaining runtime media is loaded from repository-relative paths.

## Client-side security
All HTML, CSS, and JavaScript delivered to a browser are public. Do not place API keys, passwords, private tokens, signing keys, or privileged credentials in this repository's frontend files. The current `.env.example` is documentation only and is not loaded by the game.

## Input and runtime
The current game handles keyboard events and updates element styles. It does not accept text input, deserialize untrusted data, or call an application API. Avoid adding `eval`, dynamically generated script, or unnecessary third-party dependencies.

## Supply chain
The project currently has no npm dependencies. GitHub Actions workflows use third-party actions by reference; review action ownership, permissions, and updates before adding more automation. The quality workflow is read-only and does not require repository write tokens.

## Media rights and trust
The repository contains branded character art and audio. Their provenance and redistribution permissions are not established in this repository. The root MIT grant excludes these media files. Do not present the MIT badge as licensing every asset.

## Incident handling
For suspected credential exposure, revoke or rotate the credential first, then remove it from active content and assess commit history. Use GitHub private vulnerability reporting where enabled, or contact the maintainer privately through the GitHub profile. Do not publish exploit details or secrets in public issues.

## Scope limitations
This is not a formal penetration test, privacy audit, or legal review. Reassess this document when adding third-party scripts, storage, analytics, user input, APIs, or account features.
