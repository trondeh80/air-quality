FROM node:10.12-alpine
ENV NPM_CONFIG_LOGLEVEL info

WORKDIR /app
ADD ./package.json ./

RUN npm install

ADD . .
RUN npm run build

ENTRYPOINT ["npm", "run"]
CMD ["server"]