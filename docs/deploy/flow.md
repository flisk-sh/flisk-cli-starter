# Deploy to Flow (flowswiss)

TDK CLI builds your local stack. It does not deploy it. This guide shows how to run the app you built with `tdk` on Flow (flowswiss).

Official site: https://www.flowswiss.ch/

## 1. Build the app locally

```bash
npm install -g @tdk-landscape/tdk-cli-core@1.3.185
mkdir shop && cd shop
tdk project --yes
tdk resource orders-api --type backend --stack shop --yes
tdk up shop --dry-run
tdk up shop
```

Check the service on the URL that `tdk up` prints.

## 2. Create the target on Flow (flowswiss)

Flow Swiss console: create a server (Ubuntu LTS) and add your SSH key.

## 3. Ship the app

1. Build an image for each service, for example `docker build -t orders-api:1 services/shop/orders-api`.
2. Push the images to a registry you can pull from on Flow (flowswiss).
3. On the target, run the image with its port exposed, or apply your manifests if you use Kubernetes.

## 4. Check it

Call the health endpoint of each service, for example `curl https://<your-host>/api/orders/health`.

Production setup (TLS, secrets, backups) is up to you. TDK does not manage it.
