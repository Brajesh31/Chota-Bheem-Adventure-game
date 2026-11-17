# 🔐 Security and Privacy Notes

## Application profile

This is a static browser game. It currently has no application server, authentication, database, account management, server-side secrets, application cookies, or persistent player profile.

## External requests

The Google Fonts stylesheet has been removed. The current runtime is designed to load its assets from this repository without a required third-party request.

## Client-side security

All HTML, CSS, and JavaScript delivered to a browser are public. Do not put API keys, passwords, private tokens, signing keys, or privileged credentials in frontend files. The current `.env.example` is documentation only and is not loaded by the game.

## Input and runtime

The game handles keyboard and button input and updates local element styles. It does not accept text input, deserialize untrusted data, or call an application API. Avoid adding `eval`, dynamically generated script, or unnecessary third-party dependencies.

## Supply chain

The game runtime has no external npm dependencies. Node.js is used only for built-in unit tests and repository validation. GitHub Actions workflows use versioned marketplace actions; review their permissions and updates before adding more automation. The quality workflow requests read-only repository access.

## Media rights and trust

The repository contains branded character art and audio. Their provenance and redistribution permissions are not established here. The root MIT grant excludes these media files. Do not present the MIT license as covering every repository asset.

## Incident handling

For suspected credential exposure, revoke or rotate the credential first, then remove it from active content and assess commit history. Use GitHub private vulnerability reporting where enabled, or contact the maintainer privately through the GitHub profile. Do not publish exploit details or secrets in public issues.

## Scope limitations

This is not a formal penetration test, privacy audit, or legal review. Reassess this document when adding third-party scripts, storage, analytics, user input, APIs, or account features.
