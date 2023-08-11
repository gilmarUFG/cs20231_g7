FROM node:18-alpine
WORKDIR /app

COPY . .

RUN npm install @types/express @types/node
RUN npm install

EXPOSE 3000
EXPOSE 3310

CMD ["npm", "start"]
