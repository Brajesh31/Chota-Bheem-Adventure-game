import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "index.html",
  "style.css",
  "script.js",
  "game-logic.js",
  "package.json",
  "README.md",
  "LICENSE",
  "SECURITY.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "docs/README.md",
  "docs/gameplay.md",
  "docs/testing.md",
  "docs/security.md",
  "docs/diagrams/README.md",
  "docs/runbooks/README.md",
  "docs/templates/README.md",
  "tests/game-logic.test.js",
];

const failures = [];
for (const relativePath of requiredFiles) {
  if (!existsSync(resolve(root, relativePath))) {
    failures.push(`Missing required file: ${relativePath}`);
  }
}

const markdownFiles = ["README.md"];
for (const directory of ["docs", "docs/runbooks", "docs/templates", "docs/diagrams"]) {
  // All handbook directories are checked explicitly below via the tracked path walk.
  const absolute = resolve(root, directory);
  if (!existsSync(absolute)) failures.push(`Missing documentation directory: ${directory}`);
}

function walkMarkdown(directory) {
  const { readdirSync, statSync } = awaitImportFs;
  for (const entry of readdirSync(directory)) {
    const path = resolve(directory, entry);
    if (statSync(path).isDirectory()) walkMarkdown(path);
    else if (entry.endsWith(".md")) markdownFiles.push(path.slice(root.length + 1));
  }
}

const awaitImportFs = await import("node:fs");
walkMarkdown(resolve(root, "docs"));

for (const markdownPath of new Set(markdownFiles)) {
  const content = readFileSync(resolve(root, markdownPath), "utf8");
  const links = content.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g);
  for (const match of links) {
    const rawTarget = match[1].trim().replace(/^<|>$/g, "");
    if (!rawTarget || /^(https?:|mailto:|tel:|#)/i.test(rawTarget)) continue;
    const targetPath = rawTarget.split("#")[0].split("?")[0];
    if (!targetPath) continue;
    const resolved = resolve(root, dirname(markdownPath), decodeURIComponent(targetPath));
    if (!existsSync(resolved)) failures.push(`Broken Markdown link in ${markdownPath}: ${rawTarget}`);
  }
}

const html = readFileSync(resolve(root, "index.html"), "utf8");
const css = readFileSync(resolve(root, "style.css"), "utf8");
const script = readFileSync(resolve(root, "script.js"), "utf8");
const htmlRefs = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)].map((match) => match[1]);
const cssRefs = [...css.matchAll(/url\(["']?([^)"']+)["']?\)/g)].map((match) => match[1]);
const scriptRefs = [...script.matchAll(/new Audio\(["']([^"']+)["']\)/g)].map((match) => match[1]);

for (const reference of [...htmlRefs, ...cssRefs, ...scriptRefs]) {
  if (/^(https?:|data:|#)/i.test(reference)) continue;
  if (!existsSync(resolve(root, reference))) failures.push(`Missing local runtime asset: ${reference}`);
}

if (failures.length) {
  console.error(failures.map((failure) => `❌ ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`✅ Repository validation passed. Checked ${requiredFiles.length} required files, Markdown links, and ${htmlRefs.length + cssRefs.length + scriptRefs.length} local runtime references.`);
}
