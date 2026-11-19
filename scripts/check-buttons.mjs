import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const buttonDir = join(root, '.github', 'buttons');
const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(md|ya?ml|mjs|js|json)$/.test(name)) files.push(path);
  }
};
for (const name of ['README.md', 'AGENTS.md', 'CLAUDE.md']) {
  const path = join(root, name);
  if (existsSync(path)) files.push(path);
}
if (existsSync(join(root, 'docs'))) walk(join(root, 'docs'));

const text = [...new Set(files)].map((path) => readFileSync(path, 'utf8')).join('\n');
const buttons = readdirSync(buttonDir).filter((name) => name.endsWith('.svg'));
const unused = buttons.filter((name) => !text.includes(name));
assert.deepEqual(unused, [], `unused button assets: ${unused.join(', ')}`);

const referencePattern = /\.github\/buttons\/([A-Za-z0-9._-]+\.svg)/g;
const missing = [
  ...new Set([...text.matchAll(referencePattern)].map((match) => match[1])),
].filter((name) => !existsSync(join(buttonDir, name)));
assert.deepEqual(missing, [], `referenced button assets missing: ${missing.join(', ')}`);

console.log(`all ${buttons.length} button assets are referenced and all references resolve`);
