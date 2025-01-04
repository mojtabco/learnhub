FROM docker.arvancloud.ir/python:3.11-slim

LABEL authors="MojtabaAskari" \
      description="Docker image for LearnHub application"

WORKDIR /app

ENV PYTHONUNBUFFERED=1

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chmod +x /app/create_superuser.sh

