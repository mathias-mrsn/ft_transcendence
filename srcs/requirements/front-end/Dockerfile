FROM node:18 As development

WORKDIR /usr/front-end

COPY ./bin/entrypoint.sh /usr/bin/entrypoint.sh

RUN apt-get update -y
RUN npm install -g npm@latest
RUN npm install -g react-app-rewired

ENTRYPOINT [ "/bin/bash", "/usr/bin/entrypoint.sh" ]

FROM node:18 As production

WORKDIR /usr/front-end

COPY . .

RUN apt-get update -y
RUN npm install -g npm@latest
RUN npm install -g react-app-rewired

ENTRYPOINT [ "/bin/bash", "/usr/bin/entrypoint.sh" ]

