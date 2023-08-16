import { Request, Response, Router } from "express";
import { UsuarioController } from "./controller/UsuarioController.js";
import { Usuario } from "./entity/Usuario.js";
import { AnuncioController } from "./controller/AnuncioController.js";
import swaggerUi from "swagger-ui-express";

export const routes = Router();
export const routesSecurity = Router();
routesSecurity.use(UsuarioController.verificarToken);

/**********USUSARIO*********/
routes.get('/usuario/obter/:id', UsuarioController.obter)
routes.get('/usuario/listar', UsuarioController.listar);
routes.post('/usuario/cadastrar', UsuarioController.cadastrar); //retorna o token
routes.post('/usuario/login', UsuarioController.login);//retorna o token
/*----------*/
routesSecurity.post('/usuario/seInteressar', UsuarioController.seInteresar);
/**********USUSARIO*********/


/*******ANUNCIO********/
routes.get('/anuncio/obterPorUsuario/:id',AnuncioController.obterPorUsuario)
routes.get('/anuncio/listarTodos', AnuncioController.listar);
routes.post('/anuncio/detalharDeslogado',AnuncioController.detalharAnuncioDeslogado);
routes.post('/anuncio/filtrar', AnuncioController.filtrarPageable);
/*----------*/
routesSecurity.post('/anuncio/detalharLogado', AnuncioController.detalharAnuncioLogado);
routesSecurity.post('/anuncio/cadastrar', AnuncioController.cadastrar);
routesSecurity.delete('/anuncio/deletar',AnuncioController.deletarAnuncio)
routesSecurity.post('/anuncio/editarAnuncio',AnuncioController.editarAnuncio);

/*******ANUNCIO********/






routes.get('/', (req: Request, res: Response) => {
    res.sendStatus(204)
})
