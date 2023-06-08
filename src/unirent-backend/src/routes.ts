import { Request, Response, Router } from "express";
import { UsuarioController } from "./controller/UsuarioController.js";
import { Usuario } from "./entity/Usuario.js";
import { AnuncioController } from "./controller/AnuncioController.js";

export const routes = Router();

routes.get('/usuario/listar',UsuarioController.listarUsuarios);

routes.post('/usuario/cadastrar', UsuarioController.cadastrar); //retorna o token

routes.post('/usuario/login', UsuarioController.login);//retorna o token

export const routesSecurity = Router();
routesSecurity.use(UsuarioController.verificarToken);
routesSecurity.post('/anuncio/cadastrar/:id',AnuncioController.cadastrar);







routes.get('/',(req: Request, res: Response)=>{
    console.log("Peguei")
    res.sendStatus(204)})
