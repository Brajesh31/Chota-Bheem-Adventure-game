# 🧰 Repository Scripts

The `scripts/` directory contains maintenance utilities, not browser runtime code.

## validate-repository.mjs

Run from the repository root:

```bash
npm run validate
```

The validator checks that required source, docs, and test files exist; resolves relative Markdown links; and verifies local assets referenced by the page, stylesheets, and audio constructor declarations.

### Limitations

- It is a focused project validator, not a full Markdown parser.
- It does not validate heading anchors, remote links, image content, accessibility, or whether a remote service is available.
- It does not inspect binary media licensing or detect all possible secret patterns.
- Passing the validator does not prove the game works in a browser.

Use Node.js 22 or later. The script has no third-party dependencies.
