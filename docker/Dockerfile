#node
FROM node:alpine as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build


#nginx
FROM nginx:alpine

COPY --from=build /app/build /var/www/html/public

COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]