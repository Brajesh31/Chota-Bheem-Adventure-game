# Runbook: Audio Troubleshooting

1. Start the game using the visible start button. Browsers commonly block audio before a user gesture.
2. Check tab mute, site permissions, system volume, and output device.
3. Open Network tools and verify the two local MP3 files load successfully.
4. Confirm file names and capitalization exactly match the declarations in `script.js`.
5. If playback is blocked, check the in-game audio status message. The game should remain playable without sound.
6. Test another current browser to distinguish browser policy from a damaged file.

Audio is optional. Playback failures are caught and must not terminate the game session.
