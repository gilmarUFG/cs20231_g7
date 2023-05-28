import { Request, Response, Router } from "express";
import { UsuarioController } from "./controller/UsuarioController.js";
import { Usuario } from "./entity/Usuario.js";

export const routes = Router();

routes.post('/usuario/cadastro', UsuarioController.cadastrar);

routes.post('/usuario/login', UsuarioController.login);

routes.post('/usuario/verificar', UsuarioController.verificarToken);





routes.get('/',(req: Request, res: Response)=>{
    console.log("Peguei")
    res.sendStatus(204)})
