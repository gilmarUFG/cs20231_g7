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
import { FindOptionsWhere, LessThanOrEqual, Like } from "typeorm";

export interface AnuncioDadosIniciais{
    tipoAluguel: TipoAluguel;
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
                    id: req.body.usuarioId
                }
            })

            if(usuarioDono==null) {
                res.status(500);
                throw new Error(`o id recebido nao esta associado a nenhum usuario`);
            }


            let {bulkCad} = req.body;
            if(bulkCad===true){
            const x = await AnuncioController.bulkCad(req.body.anuncios);
            }

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


    public static async filtrarPageable(req: Request, res: Response){
        try {
            let takeFlag = 0;
            let pageFlag = 0;
            let limitFlag = 0;
            let take = (typeof req.query.take !== 'string') ? takeFlag=1 : Number.parseInt(req.query.take);
            let page = (typeof req.query.page !== 'string' ) ? pageFlag=1: Number.parseInt(req.query.page);
            let limit = (typeof req.query.limit !== 'string') ? limitFlag=1: Number.parseInt(req.query.limit);

                if(takeFlag || pageFlag || limitFlag)
                {
                    res.status(400);
                    throw new Error(`valor inválido para take,page ou limit`)
                }



            const [result,total] = await AnuncioController.findAllPageable(
                take,
                page,
                limit,
                req.body
            );


            res.json({
                anuncios: result,
                total: total,
                pagina: page,
                registros: result.length,
                limitePorPagina: limit
            })
        }catch (err){

            res.json(`Ocorreu um problema na listagem paginável de anuncios: ${err.message}`);

        }

    }

    private static async findAllPageable(take: number, page: number, limit: number,filtro: any): Promise<[Anuncio[],number]>{



        return  anuncioRepository.findAndCount({
            where:{
                tipoAluguel: Like(filtro.tipoAluguel || "%%"),
                valorAluguel: LessThanOrEqual(Number.parseFloat(filtro.valorAluguel) || Number.MAX_VALUE),
                quartos: LessThanOrEqual(Number.parseInt(filtro.quartos) || Number.MAX_VALUE),
                area: LessThanOrEqual(Number.parseFloat(filtro.area) || Number.MAX_VALUE),
                descricao: Like(`%${filtro.descricaoLike || ""}%` || "%%")

            },
            take: take,
            skip: (page-1) * (limit)
        })

    }



}