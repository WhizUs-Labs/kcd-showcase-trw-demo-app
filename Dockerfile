# Step 1: Build the Node.js application using a distroless image with a non-root user
FROM node:20-alpine AS builder

# Create a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

WORKDIR /app

COPY package*.json ./

# Install dependencies separately to leverage Docker's caching mechanism
RUN npm ci

COPY --chown=appuser:appgroup . .

RUN npm run build

# Step 2: Use the nginx-unprivileged image instead of the standard nginx image
FROM nginxinc/nginx-unprivileged:stable-alpine

# Copy the built application from the builder stage to the nginx public directory
COPY --from=builder /app/build /usr/share/nginx/html/

# Add OpenContainer specifications
LABEL org.opencontainers.image.title="KCD Showcase Application"
LABEL org.opencontainers.image.description="This is a simple showcase application"
LABEL org.opencontainers.image.url="https://whizus.com"
LABEL org.opencontainers.image.source="https://github.com/WhizUs-Labs/kcd-showcase-trw-demo-app.git"
LABEL org.opencontainers.image.version="0.1.0"
LABEL org.opencontainers.image.vendor="WhizUs GmbH"
LABEL org.opencontainers.image.licenses="MIT"

# Expose the non-root default port for nginx-unprivileged
EXPOSE 8080/tcp

CMD ["nginx", "-g", "daemon off;"]