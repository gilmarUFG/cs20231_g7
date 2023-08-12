FROM node:18-alpine
WORKDIR /app

COPY . .

RUN npm install
RUN npm install @types/express @types/node

CMD ["npm", "start"]
