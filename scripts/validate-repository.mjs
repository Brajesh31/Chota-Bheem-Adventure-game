import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
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
  "PRIVACY.md",
  "GOVERNANCE.md",
  "ACKNOWLEDGMENTS.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "favicon.svg",
  "docs/README.md",
  "docs/gameplay.md",
  "docs/testing.md",
  "docs/security.md",
  "docs/privacy.md",
  "docs/quality-assurance.md",
  "docs/project-structure.md",
  "docs/diagrams/README.md",
  "docs/runbooks/README.md",
  "docs/templates/README.md",
  "scripts/README.md",
  "tests/README.md",
  "tests/game-logic.test.js",
];

const failures = [];
for (const relativePath of requiredFiles) {
  if (!existsSync(resolve(root, relativePath))) {
    failures.push(`Missing required file: ${relativePath}`);
  }
}

const markdownFiles = ["README.md", "CONTRIBUTING.md", "SECURITY.md", "PRIVACY.md", "GOVERNANCE.md", "ACKNOWLEDGMENTS.md"];
function walkMarkdown(directory) {
  for (const entry of readdirSync(directory)) {
    const absolutePath = resolve(directory, entry);
    if (statSync(absolutePath).isDirectory()) {
      walkMarkdown(absolutePath);
    } else if (entry.endsWith(".md")) {
      markdownFiles.push(absolutePath.slice(root.length + 1));
    }
  }
}
walkMarkdown(resolve(root, "docs"));
walkMarkdown(resolve(root, "scripts"));
walkMarkdown(resolve(root, "tests"));

for (const markdownPath of new Set(markdownFiles)) {
  const original = readFileSync(resolve(root, markdownPath), "utf8");
  const content = original.replace(/```[\s\S]*?```/g, "");
  const links = content.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g);
  for (const match of links) {
    const rawTarget = match[1].trim().replace(/^<|>$/g, "");
    if (!rawTarget || /^(https?:|mailto:|tel:|#)/i.test(rawTarget)) continue;
    const targetPath = rawTarget.split("#")[0].split("?")[0];
    if (!targetPath) continue;

    let decodedTarget;
    try {
      decodedTarget = decodeURIComponent(targetPath);
    } catch {
      failures.push(`Malformed encoded Markdown link in ${markdownPath}: ${rawTarget}`);
      continue;
    }
    const resolvedTarget = resolve(root, dirname(markdownPath), decodedTarget);
    if (!existsSync(resolvedTarget)) {
      failures.push(`Broken Markdown link in ${markdownPath}: ${rawTarget}`);
    }
  }
}

const html = readFileSync(resolve(root, "index.html"), "utf8");
const css = readFileSync(resolve(root, "style.css"), "utf8");
const script = readFileSync(resolve(root, "script.js"), "utf8");
const htmlRefs = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)].map((match) => match[1]);
const cssRefs = [...css.matchAll(/url\(["']?([^) "'']+)["']?\)/g)].map((match) => match[1]);
const scriptRefs = [...script.matchAll(/new Audio\(["']([^"']+)["']\)/g)].map((match) => match[1]);
const importRefs = [...script.matchAll(/from\s+["']([^"']+)["']/g)].map((match) => match[1]);

for (const reference of [...htmlRefs, ...cssRefs, ...scriptRefs, ...importRefs]) {
  if (/^(https?:|data:|#)/i.test(reference)) continue;
  if (!existsSync(resolve(root, reference))) {
    failures.push(`Missing local runtime reference: ${reference}`);
  }
}

const requiredIds = [
  "startPage", "gamePage", "startButton", "restartButton", "backButton",
  "pauseButton", "exitButton", "gameContainer", "scoreCount", "gameStatus",
  "gameOverPanel", "finalScore", "audioStatus",
];
for (const id of requiredIds) {
  if (!new RegExp(`id=["']${id}["']`).test(html)) {
    failures.push(`Required HTML element id is missing: ${id}`);
  }
}

if (failures.length) {
  console.error(failures.map((failure) => `❌ ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  const referenceCount = htmlRefs.length + cssRefs.length + scriptRefs.length + importRefs.length;
  console.log(`✅ Repository validation passed. Checked ${requiredFiles.length} required files, Markdown links, ${referenceCount} runtime references, and ${requiredIds.length} UI element IDs.`);
}
