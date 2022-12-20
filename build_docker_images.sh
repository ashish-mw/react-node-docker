#!/bin/sh

# backend
docker build --file=server/Dockerfile -t docker-node ./server

# frontend
docker build --file=client/Dockerfile -t docker-react ./client

