FROM node:18-alpine AS build-env
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM nginx:alpine
COPY --from=build-env /app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
