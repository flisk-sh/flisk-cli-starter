# Deploy to Multipass

Flisk CLI builds your local stack. It does not deploy it. This guide shows how to run the app you built with `flisk` on Multipass.

Official site: https://multipass.run/

## Ask an AI to do it

Open one of these with the prompt already filled in:

- [Grok](https://grok.com/?q=Deploy%20the%20app%20I%20built%20with%20the%20Flisk%20CLI%20to%20Multipass.%20Read%20the%20guide%20at%20https%3A%2F%2Fgithub.com%2Fflisk-sh%2Fflisk-cli-starter%2Fblob%2Fmain%2Fdocs%2Fdeploy%2Fmultipass.md%20and%20walk%20me%20through%20it%20step%20by%20step.)
- [Claude](https://claude.ai/new?q=Deploy%20the%20app%20I%20built%20with%20the%20Flisk%20CLI%20to%20Multipass.%20Read%20the%20guide%20at%20https%3A%2F%2Fgithub.com%2Fflisk-sh%2Fflisk-cli-starter%2Fblob%2Fmain%2Fdocs%2Fdeploy%2Fmultipass.md%20and%20walk%20me%20through%20it%20step%20by%20step.)
- [ChatGPT](https://chatgpt.com/?q=Deploy%20the%20app%20I%20built%20with%20the%20Flisk%20CLI%20to%20Multipass.%20Read%20the%20guide%20at%20https%3A%2F%2Fgithub.com%2Fflisk-sh%2Fflisk-cli-starter%2Fblob%2Fmain%2Fdocs%2Fdeploy%2Fmultipass.md%20and%20walk%20me%20through%20it%20step%20by%20step.)

Prompt: _Deploy the app I built with the Flisk CLI to Multipass. Read the guide at https://github.com/flisk-sh/flisk-cli-starter/blob/main/docs/deploy/multipass.md and walk me through it step by step._

## 1. Build the app locally

```bash
npm install -g @flisk-sh/flisk@1.3.190
mkdir shop && cd shop
flisk project --yes
flisk resource orders-api --type backend --stack shop --yes
flisk up shop --dry-run
flisk up shop
```

Check the service on the URL that `flisk up` prints.

## 2. Create the target on Multipass

Install Multipass locally, then `multipass launch --name flisk-app` and `multipass shell flisk-app`.

## 3. Ship the app

1. Build an image for each service, for example `docker build -t orders-api:1 services/shop/orders-api`.
2. Push the images to a registry you can pull from on Multipass.
3. On the target, run the image with its port exposed, or apply your manifests if you use Kubernetes.

## 4. Check it

Call the health endpoint of each service, for example `curl https://<your-host>/api/orders/health`.

Production setup (TLS, secrets, backups) is up to you. Flisk does not manage it.
