import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
// npm --save-dev @types/node
//   "start": "nodemon --exec ts-node --esm src/index.ts"
// type: "modules" no package.json
// "module" : "es6"
// npm install --save-dev @types/express para a ide reconhecer os métodos e as tipagens

export class Environment{
 public static readonly SECRET_KEY = process.env.SECRET_KEY;
 public static readonly DB_HOST = process.env.DB_HOST;
 public static readonly DB_PORT= process.env.DB_PORT;
 public static readonly DB_USERNAME= process.env.DB_USERNAME;
 public static readonly DB_PASSWORD= process.env.DB_PASSWORD;
 public static readonly DB_DATABASE= process.env.DB_DATABASE;
}

