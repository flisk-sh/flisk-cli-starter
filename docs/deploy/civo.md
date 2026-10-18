# Deploy to Civo

TDK CLI builds your local stack. It does not deploy it. This guide shows how to run the app you built with `tdk` on Civo.

Official site: https://www.civo.com/

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

## 2. Create the target on Civo

Civo dashboard: create an Instance or a Kubernetes cluster and add your SSH key.

## 3. Ship the app

1. Build an image for each service, for example `docker build -t orders-api:1 services/shop/orders-api`.
2. Push the images to a registry you can pull from on Civo.
3. On the target, run the image with its port exposed, or apply your manifests if you use Kubernetes.

## 4. Check it

Call the health endpoint of each service, for example `curl https://<your-host>/api/orders/health`.

Production setup (TLS, secrets, backups) is up to you. TDK does not manage it.
