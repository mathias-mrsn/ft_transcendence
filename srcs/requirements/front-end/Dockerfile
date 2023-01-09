FROM node:18 As workspace-42

WORKDIR /usr/front-end

COPY . .

RUN rm -f ./package.json
RUN ln -s ./app/package.json ./package.json

RUN apt-get update -y

RUN npm install -g npm@latest
RUN npm install

FROM node:18 As development

WORKDIR /usr/front-end

COPY . .

RUN rm -f ./package.json
RUN ln -s ./app/package.json ./package.json

RUN apt-get update -y

RUN npm install -g npm@latest
RUN npm install

FROM node:18 As production

WORKDIR /usr/front-end

COPY . .

RUN rm -f ./package.json
RUN ln -s ./app/package.json ./package.json

RUN apt-get update -y

RUN npm install -g npm@latest
RUN npm install

