import { Request, Response, Router } from "express";
import { UsuarioController } from "./controller/UsuarioController.js";
import { Usuario } from "./entity/Usuario.js";
import { AnuncioController } from "./controller/AnuncioController.js";
import swaggerUi from "swagger-ui-express";

export const routes = Router();


routes.get('/usuario/listar',UsuarioController.listar);
routes.post('/usuario/cadastrar', UsuarioController.cadastrar); //retorna o token
routes.post('/usuario/login', UsuarioController.login);//retorna o token

routes.get('/anuncio/listarTodos',AnuncioController.listar);
routes.post('/anuncio/filtrar',AnuncioController.filtrarPageable);


export const routesSecurity = Router();

routesSecurity.use(UsuarioController.verificarToken);

routesSecurity.post('/anuncio/cadastrar',AnuncioController.cadastrar);







routes.get('/',(req: Request, res: Response)=>{
    console.log("Peguei")
    res.sendStatus(204)})
