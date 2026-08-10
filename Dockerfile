# Build React/Vite app, then serve with nginx under /congat/
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html ./
COPY src ./src
COPY vite.config.js ./

# Public URL path on arcade reverse proxy
ARG VITE_BASE_PATH=/congat/
ENV VITE_BASE_PATH=$VITE_BASE_PATH
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Vite base=/congat/ → assets must live under /congat/
COPY --from=build /app/dist /usr/share/nginx/html/congat

# Data dirs are mounted at runtime (see docker-compose.yml)
RUN mkdir -p \
  /usr/share/nginx/html/congat/visualization_data \
  /usr/share/nginx/html/congat/visualization_data_lo \
  /usr/share/nginx/html/congat/VIS2026/output \
  /usr/share/nginx/html/congat/VIS2026/Hi_res/HI_res_channel

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
