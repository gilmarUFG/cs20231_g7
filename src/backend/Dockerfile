FROM node:18-alpine

COPY . /app

RUN npm install @types/express @types/node
RUN npm install

CMD ["npm", "start"]
