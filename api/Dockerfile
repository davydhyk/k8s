FROM node:16-alpine as api-build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm audit fix
RUN npx prisma generate
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=api-build /app/package*.json ./
RUN npm ci --production --ignore-scripts
COPY --from=api-build /app/node_modules/.prisma/client ./node_modules/.prisma/client
RUN npm audit fix
COPY --from=api-build /app/dist ./
EXPOSE 3000
CMD ["node", "./main.js"]