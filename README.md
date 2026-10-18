# TDK CLI template

## Build your app in one click

Fastest way (recommended): open the [TDK starter](https://github.com/tdk-landscape/tdk-cli-starter) in a ready-to-use environment.

<p align="center">
  <a href="https://codespaces.new/tdk-landscape/tdk-cli-starter"><img src="https://github.com/codespaces/badge.svg" alt="Open in GitHub Codespaces" height="40"></a>&nbsp;&nbsp;<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&style=for-the-badge&logo=visualstudiocode" alt="Open in Dev Containers" height="40"></a>&nbsp;&nbsp;<a href="https://gitpod.io/#https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" height="40"></a><br>
  <a href="https://studio.firebase.google.com/import?url=https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/static/v1?label=Firebase%20Studio&message=Open&color=FFA000&style=for-the-badge&logo=firebase" alt="Open in Firebase Studio" height="40"></a>&nbsp;&nbsp;<a href="https://replit.com/github/tdk-landscape/tdk-cli-starter"><img src="https://replit.com/badge/github/tdk-landscape/tdk-cli-starter" alt="Open in Replit" height="40"></a>&nbsp;&nbsp;<a href="https://devpod.sh/open#https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/static/v1?label=DevPod&message=Open&color=1C1C1C&style=for-the-badge" alt="Open in DevPod" height="40"></a><br>
  <a href="https://stackblitz.com/github/tdk-landscape/tdk-cli-starter"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open in StackBlitz" height="40"></a>&nbsp;&nbsp;<a href="https://codesandbox.io/p/github/tdk-landscape/tdk-cli-starter"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Open in CodeSandbox" height="40"></a><br>
</p>

### Use with your AI agent

<p align="center">
  <a href="https://claude.com/product/claude-code"><img src="https://img.shields.io/static/v1?label=Use%20with&message=Claude%20Code&color=D97757&style=for-the-badge" alt="Use with Claude Code" height="40"></a>&nbsp;&nbsp;<a href="https://openai.com/codex/"><img src="https://img.shields.io/static/v1?label=Use%20with&message=Codex&color=000000&style=for-the-badge" alt="Use with Codex" height="40"></a>&nbsp;&nbsp;<a href="https://devin.ai"><img src="https://img.shields.io/static/v1?label=Use%20with&message=Devin&color=1F2937&style=for-the-badge" alt="Use with Devin" height="40"></a><br>
  <a href="https://coder.com"><img src="https://img.shields.io/static/v1?label=Use%20with&message=Coder&color=2D2D2D&style=for-the-badge" alt="Use with Coder" height="40"></a>&nbsp;&nbsp;<a href="https://zed.dev"><img src="https://img.shields.io/static/v1?label=Use%20with&message=Zed&color=084CCF&style=for-the-badge" alt="Use with Zed" height="40"></a>&nbsp;&nbsp;<a href="https://cursor.com"><img src="https://img.shields.io/static/v1?label=Use%20with&message=Cursor&color=000000&style=for-the-badge" alt="Use with Cursor" height="40"></a><br>
  <a href="https://windsurf.com"><img src="https://img.shields.io/static/v1?label=Use%20with&message=Windsurf&color=0B100D&style=for-the-badge" alt="Use with Windsurf" height="40"></a>&nbsp;&nbsp;<a href="https://codeanywhere.com"><img src="https://img.shields.io/static/v1?label=Use%20with&message=Codeanywhere&color=0D6EFD&style=for-the-badge" alt="Use with Codeanywhere" height="40"></a>&nbsp;&nbsp;<a href="https://www.augmentcode.com"><img src="https://img.shields.io/static/v1?label=Use%20with&message=Augment%20Code&color=111111&style=for-the-badge" alt="Use with Augment Code" height="40"></a><br>
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
