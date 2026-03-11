FROM node:22 AS build

EXPOSE 80

WORKDIR /app

ADD ./ .

RUN npm install

CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "3000"]
