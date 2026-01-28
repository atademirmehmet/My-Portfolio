# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Nginx (unprivileged for non-root)
FROM nginxinc/nginx-unprivileged:alpine

# Copy nginx config
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=build /app/dist /usr/share/nginx/html

# nginx-unprivileged runs on port 8080 by default
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
