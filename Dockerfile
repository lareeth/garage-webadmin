FROM node:22 AS build

WORKDIR /app

ADD ./ .

RUN npm install

RUN npm run build

FROM node:22

COPY --from=build /app/dist /app/dist

WORKDIR /app

EXPOSE 3000

COPY --from=build /app/scripts/release-preview/files/vite.config.js /app/vite.config.js

CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "3000"]
