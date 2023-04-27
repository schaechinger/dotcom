FROM node:18-alpine as builder

LABEL maintainer="manuel@schaechinger.com"

ARG BUILD_HASH
ENV BUILD_HASH=$BUILD_HASH

WORKDIR /build
COPY package* ./
RUN npm i --production=false
COPY . ./
RUN npm run build:ssr

FROM keymetrics/pm2:18-alpine as runtime

WORKDIR /usr/share/www
COPY --from=builder /build/dist/ssr ./
COPY --from=builder /build/node_modules ./node_modules/
RUN npm prune --production
EXPOSE 3000

CMD ["pm2-runtime", "start", "index.js"]
