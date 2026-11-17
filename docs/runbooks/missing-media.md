# Runbook: Missing Media

1. Open browser developer tools and select the Network panel.
2. Reload the page.
3. Identify failed image, GIF, or MP3 requests.
4. Compare the requested path and letter casing with the tracked file name.
5. Verify the asset exists in the deployed directory.
6. Check whether deployment omitted large or binary assets.
7. Retest after deploying the corrected static directory.

Do not replace missing artwork with an unlicensed download. Record permission and attribution information for any replacement asset.
