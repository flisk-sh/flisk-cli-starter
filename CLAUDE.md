# Agent notes

- This repo starts a Flisk CLI stack. Install with `npm install`, then run `npx flisk --version`.
- Create the app with `npm run flisk:project`, then `npm run flisk:resource` (the same as `flisk project --yes` and `flisk resource orders-api --type backend --stack shop --yes`).
- Preview with `npm run flisk:dry-run` before `npm run flisk:up`. `flisk up` needs Docker and Tilt.
- Run every command from the repo root. `npm run flisk:project` and `npm run flisk:resource` create the app there; do not make a subfolder or write `package.json` by hand, it already exists.
- Flisk needs Bun 1.2 or newer on the PATH. Install it if `bun --version` fails.
- In a browser-only sandbox (Bolt, StackBlitz) stop after `npm run flisk:dry-run`; `flisk up` needs Docker and Tilt, so tell the user to run it on their own machine.
