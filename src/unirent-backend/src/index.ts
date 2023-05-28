import express, { Request, Response } from 'express';
import chalk from "chalk";
import { UniRentDataSource } from "./config/UniRentDataSource.ts";
import { routes } from "./routes.js";
import { UsuarioController } from "./controller/UsuarioController.js";
UniRentDataSource.initialize().then(async (c)=>{
const app = express();


app.use(
    express.json(),
    routes,
);

app.use('/site',UsuarioController.verificarToken)

app.listen(3000, ()=>{

    console.log(chalk.blue(`Servidor escutando a porta 3000`));
});

}
).catch((error)=>{console.log(chalk.red(`Erro na inicialização da conexão com o banco de dados: ${error}`))})



