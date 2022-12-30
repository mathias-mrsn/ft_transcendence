FROM debian:buster

LABEL maintainer="MAURAISIN Mathias <mamaurai@student.42.fr>"

RUN apt-get update -y \
    && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get install -y aptitude \
    && aptitude install -y npm \
    && apt-get install -y vim

RUN npm install -g npm@latest
RUN npm i -g /home/back-end/package.json


RUN ["/bin/bash"]