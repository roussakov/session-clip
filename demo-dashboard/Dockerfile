FROM node:8.14-alpine
RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install
RUN npm run build --prod

FROM nginx:alpine

COPY --from=0 /app/dist/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
