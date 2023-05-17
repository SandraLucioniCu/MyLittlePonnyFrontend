#pull oficial base image
FROM node:18.12.0-alpine

#set working directory
WORKDIR usr/game-app

#install app dependencies
COPY ./ /usr/game-app

RUN npm install

#add app
COPY . .

#start app
RUN npm run build

#production enviroment
FROM nginx:1.19-alpine

COPY ./local-services/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=0 /usr/game-app/build /usr/share/nginx/html