FROM node:22-slim as BUILDER

WORKDIR /usr/src/app

COPY package*.json ./
COPY swagger.ts ./
COPY tsconfig.json ./

RUN npm install

COPY src ./src

FROM node:22-alpine

ARG NODE_ENV

WORKDIR /usr/src/app
COPY --from=BUILDER /usr/src/app/ ./

EXPOSE 3000

CMD ["npm", "run", "dev"]