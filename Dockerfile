# Melanoma Tissue Volumes — production image for arcade
# Public URL: https://arcade.evl.uic.edu/congat  (HTTP port 9595)
#
# High-res channels (High Res toggle): mounted from ./visualization_data
# Low-res channels (Low Res toggle):   mounted from ./visualization_data_low
# Data is NOT baked into the image (see docker-compose.yml volumes).

FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY index.html ./
COPY src ./src
COPY vite.config.js ./
# Imported by About modal (Title.jsx)
COPY graphical_abstract.jpg ./

# Must match reverse-proxy path on arcade
ARG VITE_BASE_PATH=/congat/
ENV VITE_BASE_PATH=$VITE_BASE_PATH

RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/congat

# Mount points for channel volumes (filled at runtime)
RUN mkdir -p \
    /usr/share/nginx/html/congat/visualization_data \
    /usr/share/nginx/html/congat/visualization_data_low \
    /usr/share/nginx/html/congat/VIS2026/output \
    /usr/share/nginx/html/congat/VIS2026/Hi_res/HI_res_channel \
  && rm -f /etc/nginx/conf.d/default.conf.bak 2>/dev/null || true

# Arcade expects the app on 9595
EXPOSE 9595

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:9595/congat/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
