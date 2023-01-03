FROM node:18 As development

WORKDIR /usr/back-end

COPY . .

RUN rm -f ./package.json
RUN ln -s ./app/package.json ./package.json

RUN npm install -g npm@latest
RUN npm install
RUN npx prisma generate --schema='./app/prisma/schema.prisma'

FROM node:18 As production

WORKDIR /usr/back-end

COPY . .

RUN rm -f ./package.json
RUN ln -s ./app/package.json ./package.json

RUN npm install -g npm@latest
RUN npm install
RUN npx prisma generate --schema='./app/prisma/schema.prisma'

