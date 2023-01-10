# FROM node:18 As workspace-42

# WORKDIR /usr/back-end

# ARG SSH_ROOT_PASSWORD

# COPY . .
# COPY ./bin/entrypoint.sh /usr/bin/entrypoint.sh

# RUN rm -f ./package.json
# RUN ln -s ./app/package.json ./package.json

# RUN apt-get update -y
# RUN apt-get install -y postgresql-client vim

# RUN apt-get install -y openssh-server
# RUN mkdir -p /var/run/sshd
# RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
# RUN echo "root:password" | chpasswd

# RUN npm install -g npm@latest
# RUN npm install

# ENTRYPOINT [ "/bin/bash", "/usr/bin/entrypoint.sh" ]



FROM node:18 As development

WORKDIR /usr/back-end

COPY ./bin/entrypoint.sh /usr/bin/entrypoint.sh

RUN apt-get update -y
RUN apt-get install -y postgresql-client vim

RUN npm install -g npm@latest

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
