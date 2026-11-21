# Agent notes

Flisk is a real npm package, `@flisk-sh/flisk` (CLI `flisk`, site https://flisk.sh, source https://github.com/flisk-sh/flisk). It is already in `package.json`. Do not search the web, check for Docker or Tilt, or install anything global. Run exactly these, from the repo root:

1. `npm install`
2. `npm run flisk:project` (needs Bun 1.2+; install Bun only if `bun --version` fails)
3. `npm run flisk:resource` (a plain-process `orders-api` backend in the `shop` stack, no Docker)
4. `npm install --prefix services/shop/orders-api`
5. `npm run flisk:up` (runs it as local processes, no Docker or Tilt). It prints `http://localhost:4000`; `/health` returns `{"status":"ok"}`. Stop with Ctrl-C.

`npm run flisk:dry-run` previews without starting. `package.json` already exists: do not write it by hand or make a subfolder. To deploy, read `docs/deploy/<cloud>.md`.
