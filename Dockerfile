FROM node:20-alpine as builder 

WORKDIR '/app'

COPY package.json .

RUN  npm install 

COPY . .

RUN  npm run build 



FROM nginx:mainline-alpine3.18-slim

COPY --from=builder /app/build  /usr/share/nginx/html/

#RUN addgroup -S nginx && adduser -S nginx -G nginx
#USER nginx