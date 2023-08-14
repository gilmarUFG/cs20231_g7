FROM node:18-alpine
WORKDIR /app

COPY . .

RUN npm install ts-node
RUN npm install @types/express @types/node
RUN npm install

CMD ["npm", "start"]
