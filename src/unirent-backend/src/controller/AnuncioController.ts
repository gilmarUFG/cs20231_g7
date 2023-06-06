import { Request , Response} from "express";
import { Usuario } from "../entity/Usuario.js";
import { UniRentDataSource } from "../config/UniRentDataSource.js";
import { Anuncio } from "../entity/Anuncio.js";
import chalk from "chalk";
import { TipoAluguel } from "../enums/TipoAluguel.js";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Universidade } from "../entity/Universidade.js";
import { paginate } from "typeorm-pagination/dist/helpers/pagination.js";
import { TipoImovel } from "../enums/TipoImovel.js";
import { DadosIniciais } from "./UsuarioController.js";

export interface AnuncioDadosIniciais{
    tipoMoradia: TipoAluguel;
    dataPublicacao: Date;
    tipoImovel: TipoImovel;
    quartos: number;
    area: number;
    vagasGaragem: number;
    aceitaAnimais: boolean;
    valorAlguel: number;
    valorCondominio: number;
    valorIPTU: number;
    comodidades: string[];
    descricao: string;


}

const anuncioRepository = UniRentDataSource.getRepository(Anuncio);
export class AnuncioController{

    public static async cadastrar(req: Request, res: Response){
        try{
            const usuarioDono: Usuario = await UniRentDataSource.getRepository(Usuario).findOne({
                relations: {
                    anuncios: true
                },
                where: {
                    id: Number.parseInt(req.params.id)
                }
            })

            if(usuarioDono==null) {
                res.status(500);
                throw new Error(`o id recebido nao esta associado a nenhum usuario`);
            }

            //const x = await AnuncioController.bulkCad(req.body.anuncios);


            usuarioDono.anuncios.push(new Anuncio().withProperties(req.body.anuncio));
            await UniRentDataSource.getRepository(Usuario).save(usuarioDono);
            res.sendStatus(200);

        }catch (err){

            res.json({ erro: `Erro no cadastro do anúncio. ${err.message }`})
        }
    }

    private static async bulkCad(dadosInicias: AnuncioDadosIniciais[]){
        dadosInicias.forEach(dados=>{
             anuncioRepository.save(new Anuncio().withProperties(dados));
        })

    }




    public static async listar(req: Request, res: Response){
        try{
            const listaDeAnuncios = await UniRentDataSource.getRepository(Anuncio).find({});
            res.json(listaDeAnuncios);

        }catch (err){
            res.json(`Erro na listagem de anuncios: ${err.message}`)
        }

    }


    public static async listarPageable(req: Request, res: Response){
        try {
            const [result,total] = await AnuncioController.queryPageable(
                Number.parseInt(req.params.take),
                Number.parseInt(req.params.page),
                Number.parseInt(req.params.limit)
            );


            res.json({
                anuncios: result,
                total: total
            })
        }catch (err){

            res.json(`Ocorreu um problema na listagem paginável de anuncios: ${err.message} || ${err.stackTrace}`);

        }

    }

    private static async queryPageable(take: number, page: number, limit: number): Promise<[Anuncio[],number]>{
        return  anuncioRepository.findAndCount({

            take: take,
            skip: (page-1) * (limit)
        })

    }



}