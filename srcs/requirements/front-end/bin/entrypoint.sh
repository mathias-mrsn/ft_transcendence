#!/bin/bash

rm -f ./package.json 
ln -s ./app/package.json ./package.json

npm install

exec "$@"