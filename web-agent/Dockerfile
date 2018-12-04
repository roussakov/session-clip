FROM node:8.14-alpine
RUN mkdir /app

ARG API_HOST

COPY . /app
WORKDIR /app

RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY --from=0 /app/dist/index.js /usr/src/app/index.js

COPY nginx.conf /etc/nginx/nginx.conf
