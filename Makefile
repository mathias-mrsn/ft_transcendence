# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: mamaurai <mamaurai@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/01/02 10:42:00 by mamaurai          #+#    #+#              #
#    Updated: 2023/01/03 14:57:49 by mamaurai         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Only two modes are available: dev and production
MODE = dev

ifeq ($(MODE), dev)
	DOCKER_ENV_FILE = srcs/.dev/.env
else
	DOCKER_ENV_FILE = srcs/.env
endif

DOCKER_COMPOSE_FILE = srcs/docker-compose.yml
DOCKER_COMPOSE = docker-compose
BASH = /bin/bash
CLEAR_FILE = ./srcs/.dev/docker-cleaner.sh
DOCKER_EXEC = docker exec -it
FRONT_NAME = front-end
BACK_NAME = back-end
SCRIPT_TO_RUN = /bin/bash

ifeq ($(MODE),$(filter $(MODE),dev production))
all:	up
else
all:
		@echo "Invalid mode, please use 'make MODE=dev' or 'make MODE=prod' to run the project."
endif

ifeq ($(MODE),$(filter $(MODE),dev production))
re:		restart

up:		up-back

up-back:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} up --build -d

stop:	
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} stop

clean:
		@make stop
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} down

restart:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} stop || true
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} up --build -d

status:
		@${DOCKER_COMPOSE} -f ${DOCKER_COMPOSE_FILE} ps
endif

ifeq (${MODE}, dev)
up-front:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} up --build

in-front:
		@${DOCKER_EXEC} ${FRONT_NAME} ${SCRIPT_TO_RUN}

in-back:
		@${DOCKER_EXEC} ${BACK_NAME} ${SCRIPT_TO_RUN}

dclean:
		@make stop 2>/dev/null
		@${BASH} ${CLEAR_FILE} || true

drestart:
		@${BASH} ${CLEAR_FILE} || true
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} up --build -d
		
logs:
		@${DOCKER_COMPOSE} --env-file ${DOCKER_ENV_FILE} -f ${DOCKER_COMPOSE_FILE} logs --tail=100
endif

.PHONY: all re up up-back stop clean dclean restart drestart status logs

