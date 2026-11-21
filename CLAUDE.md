# Agent notes

Flisk is a real npm package, `@flisk-sh/flisk` (CLI `flisk`, site https://flisk.sh, source https://github.com/flisk-sh/flisk). It is already listed in `package.json` here. Do not search the web or fetch anything else: every step is below. The only commands to run are these.

1. `npm install`, then `npx flisk --version`.
2. `npm run flisk:project` (creates the stack; needs Bun 1.2+, install it if `bun --version` fails).
3. `npm run flisk:resource` (scaffolds the `orders-api` backend in the `shop` stack, served at `/api/orders`).
4. `npm run flisk:dry-run` (previews the stack, needs no containers).
5. `npm run flisk:up` starts it and needs Docker and Tilt. Open the printed `*.localhost` URL; stop with Ctrl-C.

Rules:
- Run everything from the repo root. `package.json` already exists, do not write it by hand or make a subfolder.
- In a browser-only sandbox (Bolt, StackBlitz, Lovable, v0) there is no Docker or Tilt: stop after step 4 and tell the user to run step 5 on their own machine or in Codespaces, Gitpod or Dev Containers.
- To deploy, read `docs/deploy/<cloud>.md` (aws, azure, docker, hetzner, ...).
