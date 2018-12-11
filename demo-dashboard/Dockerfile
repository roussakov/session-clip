FROM node:8.14-alpine as builder
RUN mkdir /app
COPY . /app
WORKDIR /app
ARG ENV
RUN npm install
RUN npm run build:${ENV}

FROM nginx:alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

