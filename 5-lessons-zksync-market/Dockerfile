FROM node:10.19.0

WORKDIR /opt

COPY package*.json ./

RUN npm install

COPY . .

#CMD [ "node", "/usr/src/app/src/server.js" ]
CMD tail -f /dev/null
