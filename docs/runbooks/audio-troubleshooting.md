# Runbook: Audio Troubleshooting

1. Start the game using the visible button. Browsers commonly block audio before a user gesture.
2. Check tab mute, site permissions, system volume, and output device.
3. Open Network tools and verify requested MP3 files return successfully.
4. Confirm file names and capitalization exactly match `script.js`.
5. Inspect the console for rejected `play()` promises.
6. Test in another current browser to distinguish browser policy from file corruption.

The current script does not handle audio playback promise rejection. Treat console warnings as evidence and avoid claiming audio compatibility from a single browser.
