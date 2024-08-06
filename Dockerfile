FROM node:20-alpine AS builder 

WORKDIR '/app'

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:mainline-alpine3.18-slim
COPY nginx.conf /etc/nginx/nginx.conf
 
COPY --from=builder /app/build /usr/share/nginx/html/

EXPOSE 80/tcp
CMD ["nginx", "-g", "daemon off;"]