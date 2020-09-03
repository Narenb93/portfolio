FROM node:14.9.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY yarn.lock ./

RUN npm install

COPY . ./

RUN chmod 755 /app/start.sh
CMD sh /app/start.sh
EXPOSE 80
