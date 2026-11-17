# Runbook: Static Deployment Rollback

1. Identify the last known-good commit or uploaded artifact.
2. Restore that exact static file set, including required image/GIF/audio paths.
3. Confirm `index.html` is served at the expected path.
4. Open the deployed page in a fresh browser session.
5. Verify start screen, character, obstacle, score, and audio requests.
6. Record the failed revision, rollback revision, and observed result.

Do not roll back only the HTML while leaving incompatible assets from another revision.
