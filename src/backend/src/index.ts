import express, { Request, Response } from 'express';
import chalk from "chalk";
import { UniRentDataSource } from "./config/UniRentDataSource.js";
import { routes, routesSecurity } from "./routes.js";
import { UsuarioController } from "./controller/UsuarioController.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json" assert { type: 'json' }
import cors from 'cors';
UniRentDataSource.initialize().then(async (c) => {
    const app = express();

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    app.use(
        express.json(),
        cors(),
        routes,
        routesSecurity
    );

    app.listen(3000, () => console.log(chalk.blue(`Servidor escutando a porta 3000`)));

}
).catch((error) => { console.log(chalk.red(`Erro na inicialização da conexão com o banco de dados: ${error}`)) })



