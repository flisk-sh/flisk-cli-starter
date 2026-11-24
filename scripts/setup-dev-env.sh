#!/bin/sh
# Prepare a fresh cloud/dev environment for this starter:
#  - installs npm dependencies, including the pinned Bun package that
#    `flisk project` needs on PATH (flisk 1.4.x requires Bun 1.2+)
#  - points node_modules/.bin/bun at the @oven platform binary: bun's own
#    npm bin is a stub that only its postinstall script relinks, and this
#    install runs with --ignore-scripts
# Safe to re-run.
set -e
cd "$(dirname "$0")/.."

npm install --ignore-scripts

for candidate in node_modules/@oven/*/bin/bun; do
  if [ -x "$candidate" ]; then
    ln -sf "../${candidate#node_modules/}" "node_modules/.bin/bun"
    break
  fi
done
