#!/bin/bash

until (pg_isready --dbname=ft_transcendence_database --host=postgres --port=5432) &> /dev/null; do
    echo "Waiting for postgres to start..."
    sleep 1
done

npx prisma generate --schema='./app/prisma/schema.prisma'
npx prisma migrate dev --schema='./app/prisma/schema.prisma'

if [ "$MODE" = 'development' ]; then
    /usr/sbin/sshd
fi

exec "$@"

