FROM node:24-alpine

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
COPY index.js index.js
RUN pnpm install
CMD ["node", "index"]