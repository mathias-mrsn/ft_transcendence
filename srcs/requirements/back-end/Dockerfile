FROM node:18 As development

WORKDIR /usr/back-end

COPY . .
COPY ./bin/entrypoint.sh /usr/bin/entrypoint.sh

RUN rm -f ./package.json
RUN ln -s ./app/package.json ./package.json

RUN apt-get update -y
RUN apt-get install -y postgresql-client

RUN npm install -g npm@latest
RUN npm install

ENTRYPOINT [ "/bin/bash", "/usr/bin/entrypoint.sh" ]

FROM node:18 As production

WORKDIR /usr/back-end

COPY . .

RUN rm -f ./package.json
RUN ln -s ./app/package.json ./package.json

RUN npm install -g npm@latest
RUN npm install
RUN npx prisma generate --schema='./app/prisma/schema.prisma'
RUN npx prisma migrate reset --schema='./app/prisma/schema.prisma'

ENTRYPOINT [ "/bin/bash", "/usr/bin/entrypoint.sh" ]
