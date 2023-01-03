FROM node:18 As development

WORKDIR /usr/back-end/

COPY --chown=node:node package*.json .

RUN npm ci

COPY --chown=node:node . .

USER node
