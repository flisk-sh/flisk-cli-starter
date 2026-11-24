#!/bin/sh
# Replit Run button: bootstrap the starter, then serve it.
# `flisk up` needs the project and resource generated first, so a bare
# `flisk:dry-run` on a fresh clone fails with "Could not find project root".
set -e
cd "$(dirname "$0")/.."
. ./scripts/setup-dev-env.sh

[ -f .flisk/project.json ] || npm run flisk:project
[ -d services/shop/orders-api ] || npm run flisk:resource
npm install --ignore-scripts --prefix services/shop/orders-api
npm run flisk:up
