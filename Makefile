DOCKER_COMPOSE = docker-compose
DOCKER_COMPOSE_FILE = srcs/docker-compose-dev.yml
BASH = /bin/bash
CLEAR_FILE = ./srcs/.dev/docker-cleaner.sh

all:	up
re:		restart

up:		up-back

up-front:
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} up --build

up-back:
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} up --build -d

stop:	
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} stop

clean:
		@make stop
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} down

dclean:
		@make stop 2>/dev/null
		@${BASH} ${CLEAR_FILE} || true

restart:
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} stop || true
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} up --build -d

drestart:
		@${BASH} ${CLEAR_FILE} || true
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} up --build -d

status:
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} ps
		
logs:
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} logs --tail=100

.PHONY: all re up up-back stop clean dclean restart drestart status logs