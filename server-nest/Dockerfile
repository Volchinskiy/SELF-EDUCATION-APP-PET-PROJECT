FROM node

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "node", "dist/main" ]