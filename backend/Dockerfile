FROM node:24-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

FROM base AS development
ENV NODE_ENV=development

EXPOSE 5000

