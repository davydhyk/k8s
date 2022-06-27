FROM node:16-alpine as client-build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm audit fix
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=client-build /app/package*.json ./
RUN npm ci --production --ignore-scripts
RUN npm audit fix
COPY --from=client-build /app/build ./
EXPOSE 3000
CMD ["node", "./index.js"]