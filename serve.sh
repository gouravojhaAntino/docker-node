#!/bin/bash 
docker rm -f docker-node-container
docker image rm docker-node
docker build -t docker-node .
docker run --name docker-node-container -dp 8080:3000 docker-node 