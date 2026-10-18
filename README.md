# TDK CLI template

## Build your app in one click

Fastest way (recommended): open the [TDK starter](https://github.com/tdk-landscape/tdk-cli-starter) in a ready-to-use environment.

<p align="center">
  <a href="https://codespaces.new/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/build-codespaces.svg?v=15" alt="Build app with Codespaces" height="32"></a>&nbsp;&nbsp;<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/build-dev-containers.svg?v=15" alt="Build app with Dev Containers" height="32"></a>&nbsp;&nbsp;<a href="https://gitpod.io/#https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/build-gitpod.svg?v=15" alt="Build app with Gitpod" height="32"></a><br>
  <a href="https://studio.firebase.google.com/import?url=https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/build-firebase-studio.svg?v=15" alt="Build app with Firebase Studio" height="32"></a>&nbsp;&nbsp;<a href="https://replit.com/github/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/build-replit.svg?v=15" alt="Build app with Replit" height="32"></a>&nbsp;&nbsp;<a href="https://devpod.sh/open#https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/build-devpod.svg?v=15" alt="Build app with DevPod" height="32"></a><br>
  <a href="https://stackblitz.com/github/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/build-stackblitz.svg?v=15" alt="Build app with StackBlitz" height="32"></a>&nbsp;&nbsp;<a href="https://codesandbox.io/p/github/tdk-landscape/tdk-cli-starter"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/build-codesandbox.svg?v=15" alt="Build app with CodeSandbox" height="32"></a><br>
</p>

<p align="center">
  <a href="https://grok.com/?q=Build%20an%20app%20with%20the%20TDK%20CLI.%20Read%20the%20setup%20guide%20at%20https%3A%2F%2Fgithub.com%2Ftdk-landscape%2Ftdk-cli-starter%20and%20walk%20me%20through%20it%20step%20by%20step."><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/ai-grok.svg?v=15" alt="Build app with Grok" height="32"></a>&nbsp;&nbsp;<a href="https://claude.ai/new?q=Build%20an%20app%20with%20the%20TDK%20CLI.%20Read%20the%20setup%20guide%20at%20https%3A%2F%2Fgithub.com%2Ftdk-landscape%2Ftdk-cli-starter%20and%20walk%20me%20through%20it%20step%20by%20step."><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/ai-claude.svg?v=15" alt="Build app with Claude" height="32"></a>&nbsp;&nbsp;<a href="https://chatgpt.com/?q=Build%20an%20app%20with%20the%20TDK%20CLI.%20Read%20the%20setup%20guide%20at%20https%3A%2F%2Fgithub.com%2Ftdk-landscape%2Ftdk-cli-starter%20and%20walk%20me%20through%20it%20step%20by%20step."><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/ai-chatgpt.svg?v=15" alt="Build app with ChatGPT" height="32"></a><br>
</p>

### Build app with your AI agent

<p align="center">
  <a href="https://claude.com/product/claude-code"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/claude-code.svg?v=15" alt="Build app with Claude Code" height="32"></a>&nbsp;&nbsp;<a href="https://openai.com/codex/"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/codex.svg?v=15" alt="Build app with Codex" height="32"></a>&nbsp;&nbsp;<a href="https://devin.ai"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/devin.svg?v=15" alt="Build app with Devin" height="32"></a><br>
  <a href="https://coder.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/coder.svg?v=15" alt="Build app with Coder" height="32"></a>&nbsp;&nbsp;<a href="https://zed.dev"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/zed.svg?v=15" alt="Build app with Zed" height="32"></a>&nbsp;&nbsp;<a href="https://cursor.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/cursor.svg?v=15" alt="Build app with Cursor" height="32"></a><br>
  <a href="https://windsurf.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/windsurf.svg?v=15" alt="Build app with Windsurf" height="32"></a>&nbsp;&nbsp;<a href="https://codeanywhere.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/codeanywhere.svg?v=15" alt="Build app with Codeanywhere" height="32"></a>&nbsp;&nbsp;<a href="https://www.augmentcode.com"><img src="https://raw.githubusercontent.com/tdk-landscape/tdk-cli-starter/main/.github/buttons/augment-code.svg?v=15" alt="Build app with Augment Code" height="32"></a><br>
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
