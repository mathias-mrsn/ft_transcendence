FROM debian:buster

LABEL maintainer="MAURAISIN Mathias <mamaurai@student.42.fr>"

WORKDIR /home/back-end

RUN apt-get update -y \
    && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get install -y aptitude \
    && aptitude install -y npm \
    && apt-get install -y vim \
    && apt-get install -y git \
    && apt-get install -y ssh

# RUN npm i -g npm@latest
# RUN npm i -g yarn
# RUN

# RUN npm i -g


# CMD ["npm", "run", "start:dev"]