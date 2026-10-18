# TDK CLI template

## Build your app in one click

Fastest way (recommended): open the [TDK starter](https://github.com/tdk-landscape/tdk-cli-starter) in a ready-to-use environment.

<p align="center">
  <a href="https://codespaces.new/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/codespaces.svg" width="300" alt="codespaces"></a>&nbsp;&nbsp;<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/devcontainers.svg" width="300" alt="devcontainers"></a><br>
  <a href="https://gitpod.io/#https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/gitpod.svg" width="300" alt="gitpod"></a>&nbsp;&nbsp;<a href="https://studio.firebase.google.com/import?url=https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/firebase-studio.svg" width="300" alt="firebase-studio"></a><br>
  <a href="https://replit.com/github/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/replit.svg" width="300" alt="replit"></a>&nbsp;&nbsp;<a href="https://devpod.sh/open#https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/devpod.svg" width="300" alt="devpod"></a><br>
  <a href="https://stackblitz.com/github/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/stackblitz.svg" width="300" alt="stackblitz"></a>&nbsp;&nbsp;<a href="https://codesandbox.io/p/github/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/codesandbox.svg" width="300" alt="codesandbox"></a><br>
</p>

### Use with your AI agent

<p align="center">
  <a href="https://claude.com/product/claude-code"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/claude-code.svg" width="300" alt="claude-code"></a>&nbsp;&nbsp;<a href="https://openai.com/codex/"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/codex.svg" width="300" alt="codex"></a><br>
  <a href="https://devin.ai"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/devin.svg" width="300" alt="devin"></a>&nbsp;&nbsp;<a href="https://coder.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/coder.svg" width="300" alt="coder"></a><br>
  <a href="https://zed.dev"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/zed.svg" width="300" alt="zed"></a>&nbsp;&nbsp;<a href="https://cursor.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/cursor.svg" width="300" alt="cursor"></a><br>
  <a href="https://windsurf.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/windsurf.svg" width="300" alt="windsurf"></a>&nbsp;&nbsp;<a href="https://codeanywhere.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/codeanywhere.svg" width="300" alt="codeanywhere"></a><br>
  <a href="https://www.augmentcode.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/augment-code.svg" width="300" alt="augment-code"></a><br>
</p>

Agents read `AGENTS.md` (Codex) or `CLAUDE.md` (Claude Code).

## Make the app

```bash
mkdir shop && cd shop
tdk project --yes
tdk resource orders-api --type backend --stack shop --yes
```

`tdk project` creates the stack. `tdk resource` scaffolds a backend service named `orders-api`, served at `/api/orders`.

## Check the stack

Preview what will start before any container runs:

```bash
npm run tdk:dry-run
```

## Start the stack

`tdk up` needs Docker and Tilt on the machine. Run it on your own machine, or in a container that provides Docker:

```bash
npm run tdk:up
curl http://api.shop.localhost/api/orders/health
```

`tdk up` prints the host ports it chose, so use the URL it prints.

## Learn more

- [Quickstart](https://tdk-landscape.github.io/tdk-website/docs/quickstart/)
- [Examples](https://tdk-landscape.github.io/tdk-website/docs/examples/)
- [What TDK writes](https://github.com/tdk-landscape/tdk-cli-core/blob/main/docs/generated-files.md)
