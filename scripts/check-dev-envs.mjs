import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const setup = 'scripts/setup-dev-env.sh';
const failures = [];

// Every config that prepares an environment for `npm run flisk:*` must run
// scripts/setup-dev-env.sh: it installs Bun (flisk project fails without it)
// and npm dependencies.
for (const file of ['.gitpod.yml', '.devcontainer/devcontainer.json', '.codesandbox/tasks.json']) {
  const path = join(root, file);
  if (!existsSync(path)) continue;
  if (!readFileSync(path, 'utf8').includes(setup)) {
    failures.push(`${file} does not run ${setup} (Bun + npm dependencies would be missing)`);
  }
}

// A pinned global CLI version drifts from package.json: the starter must rely on
// the local devDependency via `npm run flisk:*` / `npx flisk`, so no config may
// install a versioned @flisk-sh/flisk globally.
for (const file of ['.gitpod.yml', '.devcontainer/devcontainer.json', '.codesandbox/tasks.json']) {
  const path = join(root, file);
  if (!existsSync(path)) continue;
  const pins = readFileSync(path, 'utf8').match(/install[^\n]*@flisk-sh\/flisk@[0-9.]+/g) || [];
  if (pins.length) failures.push(`${file} pins a global Flisk CLI: ${pins.join(', ')}`);
}

// The Replit run command must bootstrap the project before `flisk up`:
// `flisk up` on a fresh clone fails with "Could not find project root".
const replit = join(root, '.replit');
if (existsSync(replit)) {
  const run = readFileSync(replit, 'utf8').match(/^run\s*=\s*"(.*)"$/m)?.[1];
  if (!run?.includes('scripts/replit-start.sh')) {
    failures.push('.replit run does not bootstrap via scripts/replit-start.sh');
  }
}

// flisk 1.4.x requires Bun 1.2+ on PATH for `flisk project`; the starter
// provides it as a devDependency (bun's npm bin is relinked by setup-dev-env.sh).
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
if (!pkg.devDependencies?.bun) failures.push('package.json is missing a bun devDependency');

assert.deepEqual(failures, [], failures.join('\n'));
console.log('all dev environment configs bootstrap Bun and npm dependencies');
