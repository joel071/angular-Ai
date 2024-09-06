# Stage 1: Build the Angular Application
From node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

copy . .

#Stage 2: serve the application with a webserver

FROM nginx:alpine

COPY --from=build /app/dist/chat-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
