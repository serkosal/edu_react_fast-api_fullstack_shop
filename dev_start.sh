#!/bin/bash
# This script is used to start the Docker containers for the application.

docker-compose --profile dev up

#docker-compose --profile prod up --build