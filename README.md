# TDK CLI template

## Build your app in one click

Fastest way (recommended): open this repository in a ready-to-use environment.

<p align="center">
  <a href="https://codespaces.new/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/badge/Open%20in%20GitHub%20Codespaces-181717?style=for-the-badge&logo=github" alt="Open in GitHub Codespaces" height="64"></a>&nbsp;&nbsp;<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/badge/Open%20in%20Dev%20Containers-2188FF?style=for-the-badge&logo=visualstudiocode" alt="Open in Dev Containers" height="64"></a>&nbsp;&nbsp;<a href="https://gitpod.io/#https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/badge/Open%20in%20Gitpod-FFAE33?style=for-the-badge&logo=gitpod" alt="Open in Gitpod" height="64"></a><br>
  <a href="https://studio.firebase.google.com/import?url=https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/badge/Open%20in%20Firebase%20Studio-FFA000?style=for-the-badge&logo=firebase" alt="Open in Firebase Studio" height="64"></a>&nbsp;&nbsp;<a href="https://replit.com/github/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/badge/Open%20in%20Replit-F26207?style=for-the-badge&logo=replit" alt="Open in Replit" height="64"></a>&nbsp;&nbsp;<a href="https://devpod.sh/open#https://github.com/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/badge/Open%20in%20DevPod-1C1C1C?style=for-the-badge&logo=devpod" alt="Open in DevPod" height="64"></a><br>
  <a href="https://stackblitz.com/github/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/badge/Open%20in%20StackBlitz-1374EF?style=for-the-badge&logo=stackblitz" alt="Open in StackBlitz" height="64"></a>&nbsp;&nbsp;<a href="https://codesandbox.io/p/github/tdk-landscape/tdk-cli-starter"><img src="https://img.shields.io/badge/Open%20in%20CodeSandbox-151515?style=for-the-badge&logo=codesandbox" alt="Open in CodeSandbox" height="64"></a><br>
</p>

### Use with your AI agent

<p align="center">
  <a href="https://claude.com/product/claude-code"><img src="https://img.shields.io/badge/Use%20with%20Claude%20Code-D97757?style=for-the-badge&logo=claude" alt="Use with Claude Code" height="64"></a>&nbsp;&nbsp;<a href="https://openai.com/codex/"><img src="https://img.shields.io/badge/Use%20with%20Codex-000000?style=for-the-badge&logo=openai" alt="Use with Codex" height="64"></a>&nbsp;&nbsp;<a href="https://devin.ai"><img src="https://img.shields.io/badge/Use%20with%20Devin-1F2937?style=for-the-badge&logo=devin" alt="Use with Devin" height="64"></a><br>
  <a href="https://coder.com"><img src="https://img.shields.io/badge/Use%20with%20Coder-2D2D2D?style=for-the-badge&logo=coder" alt="Use with Coder" height="64"></a>&nbsp;&nbsp;<a href="https://zed.dev"><img src="https://img.shields.io/badge/Use%20with%20Zed-084CCF?style=for-the-badge&logo=zedindustries" alt="Use with Zed" height="64"></a>&nbsp;&nbsp;<a href="https://cursor.com"><img src="https://img.shields.io/badge/Use%20with%20Cursor-000000?style=for-the-badge&logo=cursor" alt="Use with Cursor" height="64"></a><br>
  <a href="https://windsurf.com"><img src="https://img.shields.io/badge/Use%20with%20Windsurf-0B100D?style=for-the-badge&logo=windsurf" alt="Use with Windsurf" height="64"></a>&nbsp;&nbsp;<a href="https://codeanywhere.com"><img src="https://img.shields.io/badge/Use%20with%20Codeanywhere-0D6EFD?style=for-the-badge&logo=codeanywhere" alt="Use with Codeanywhere" height="64"></a>&nbsp;&nbsp;<a href="https://www.augmentcode.com"><img src="https://img.shields.io/badge/Use%20with%20Augment%20Code-111111?style=for-the-badge&logo=augment" alt="Use with Augment Code" height="64"></a><br>
</p>

Agents read `AGENTS.md` (Codex) or `CLAUDE.md` (Claude Code). Badge logos and deep-link formats are from each platform's public docs, not tested end to end.

Make a multi-service app with the [TDK CLI](https://github.com/tdk-landscape/tdk-cli-core). You write each service's `service.json`; TDK generates the Dockerfile, routing, and Tiltfile for it. No `docker-compose.yml` or `nginx.conf` to hand-write.

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
