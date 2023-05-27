import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
export class Environment{
 public static readonly DB_HOST = process.env.DB_HOST;
 public static readonly DB_PORT= process.env.DB_PORT;
 public static readonly DB_USERNAME= process.env.DB_USERNAME;
 public static readonly DB_PASSWORD= process.env.DB_PASSWORD;
 public static readonly DB_DATABASE= process.env.DB_DATABASE;
}

