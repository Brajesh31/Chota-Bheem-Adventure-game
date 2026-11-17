# 🚀 Release Process

The project currently has no package/build/release automation. Publishing is a static file hosting task.

## Pre-release checklist

- [ ] Review the full diff for unrelated changes and removed assets.
- [ ] Open `index.html` and run the manual checklist in [testing.md](testing.md).
- [ ] Verify relative asset paths, including case-sensitive paths on the target host.
- [ ] Check audio behavior after a user gesture.
- [ ] Update README, gameplay guide, and changelog for user-visible changes.
- [ ] Confirm rights and attribution for any added media.
- [ ] Review security/privacy implications of any new external resource.
- [ ] Confirm the MIT license scope remains accurate.

## Publish

Upload the static project files to a static web host while preserving their relative directory structure. Ensure `index.html` is served as the entry page and all referenced assets are deployed. See [deployment.md](deployment.md).

## Rollback

Restore the last known-good static artifact or redeploy the previous Git revision. Confirm the start page, images, and audio load after rollback. Keep the failed release notes for diagnosis.

## Versioning

No versioning scheme is currently enforced. When tags are introduced, use descriptive release notes and reference the exact commit.
