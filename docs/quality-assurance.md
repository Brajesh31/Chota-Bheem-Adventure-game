# ✅ Quality Assurance

## Automated checks

The repository workflow runs the following on pushes and pull requests to `main`:

1. JavaScript syntax checks for browser, logic, and validation modules.
2. Required-file and local-reference validation.
3. Relative Markdown link validation.
4. Node.js built-in unit tests.
5. YAML parsing for workflows and GitHub issue/discussion forms.
6. Non-empty Mermaid diagram checks.

The workflow does not run a real browser or claim visual correctness.

## Manual checks

Use [testing.md](testing.md) to verify start, input, scoring, collision, pause/resume, restart, return-to-title, audio fallback, responsive layout, keyboard focus, and reduced-motion behavior.

## Quality gates for changes

- Keep tests deterministic.
- Avoid adding runtime dependencies without a clear need.
- Preserve relative asset paths.
- Record media rights for new assets.
- Update documentation for behavior changes.
- Report actual browser checks and known limitations.
