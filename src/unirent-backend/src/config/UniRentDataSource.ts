import {DataSource} from "typeorm";
import { Environment } from "./Environment.js";
import { Usuario } from "../entity/Usuario.js";
import { Anuncio } from "../entity/Anuncio.js";
import { Universidade } from "../entity/Universidade.js";



export const UniRentDataSource = new DataSource({
    type: "mysql",
    host: Environment.DB_HOST,
    port: Number.parseInt(Environment.DB_PORT),
    username: Environment.DB_USERNAME,
    password: Environment.DB_PASSWORD,
    database: "unirent",
    synchronize: true, // true para o banco seguir o seu projeto | false para o seu projeto não mexer com ALTER TABLE
    logging: false,
    entities: [Usuario,Anuncio, Universidade],
    migrations: [],
    subscribers: [],
})