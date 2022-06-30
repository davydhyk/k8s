FROM node:16-alpine as consumer-build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm audit fix
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=consumer-build /app/package*.json ./
RUN npm ci --production --ignore-scripts
RUN npm audit fix
COPY --from=consumer-build /app/dist ./
CMD ["node", "./main.js"]