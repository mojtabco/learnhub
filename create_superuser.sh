#!/bin/bash

echo "Starting createsuperuser process..."

docker exec -it app-learnhub python manage.py createsuperuser


