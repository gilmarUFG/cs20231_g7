import { Request , Response} from "express";
import { Usuario } from "../entity/Usuario.js";
import { UniRentDataSource } from "../config/UniRentDataSource.js";
import { Anuncio } from "../entity/Anuncio.js";
import chalk from "chalk";

export interface AnuncioDadosIniciais{
    descricao: string;
}
export class AnuncioController{

    public static async cadastrar(req: Request, res: Response){
        try{
            const usuarioDono: Usuario = await UniRentDataSource.getRepository(Usuario).findOne({
                relations: {
                    anuncios: true
                },
                where: {
                    id: req.params.id
                }
            })
            usuarioDono.anuncios.push(new Anuncio().withProperties(req.body));
            await UniRentDataSource.getRepository(Usuario).save(usuarioDono);
            res.sendStatus(200);

        }catch (err){

            res.status(500).json({ erro: `Erro no cadastro do anúncio. ${err.message }`})
        }

}



}