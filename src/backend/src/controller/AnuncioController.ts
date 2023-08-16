import { Request, Response } from "express";
import { Usuario } from "../entity/Usuario.js";
import { UniRentDataSource } from "../config/UniRentDataSource.js";
import { Anuncio } from "../entity/Anuncio.js";
import { TipoAluguel } from "../enums/TipoAluguel.js";
import { TipoImovel } from "../enums/TipoImovel.js";
import {  LessThanOrEqual, Like } from "typeorm";
import { LocalPreview } from "../entity/LocalPreview.js";

export interface AnuncioDadosIniciais {

    endereco: string;
    id?:number;
    titulo : string;
    localizacaoGoogleMaps: string;
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

    imagens : string[];

    universidadesProximas: string[];

}


const anuncioRepository = UniRentDataSource.getRepository(Anuncio);

async function conseguirAnuncio(idAnuncio: string,uniPresent: boolean, interessadosPresent: boolean, previewPresent: boolean): Promise<Anuncio>{
    const anuncio: Promise<Anuncio> = UniRentDataSource.getRepository(Anuncio)
        .findOne({
            relations : {
                interessados : interessadosPresent,
                localPreviews : previewPresent
            },
            where : {
                id : Number.parseInt(idAnuncio)
            }
        })
    return anuncio;
}

export class AnuncioController {



    public static async editarAnuncio(req: Request, res: Response){
        try{
            const novoAnuncio: AnuncioDadosIniciais = req.body.anuncio;
            const anuncio = new Anuncio().withProperties(novoAnuncio);
            await UniRentDataSource.getRepository(Anuncio)
                .save(anuncio
                );
            res.status(200).send(await UniRentDataSource.getRepository(Anuncio).findBy({id: anuncio.id}));

        }catch (err){
            res.status(500).send(err.message);
        }
    }


    public static async cadastrar(req: Request, res: Response) {
        try {
            const user: Usuario = await UniRentDataSource.getRepository(Usuario).findOne({
                relations: {
                    anuncios: true
                },
                where: {
                    id: req.body.usuarioId
                }
            })

            const anuncioDados: AnuncioDadosIniciais = req.body.anuncio;
            if (user == null) {
                res.status(500);
                throw new Error(`o id recebido nao esta associado a nenhum usuario`);
            }

            let anuncio = new Anuncio().withProperties(anuncioDados);

            console.log(anuncioDados)

            const localPreviews = anuncioDados?.imagens.map(imagem=>{
                return new LocalPreview(imagem,anuncio);
            })

            anuncio.localPreviews=localPreviews;
            user.anuncios.push(anuncio);

            await UniRentDataSource.getRepository(Usuario).save(user);
            res.sendStatus(200);
        } catch (err) {

            res.json({ erro: `Erro no cadastro do anúncio. ${err.message}` })
        }
    }

    public static async deletarAnuncio(req: Request, res: Response){

        try{
            const {idAnuncio} = req.body;

            await UniRentDataSource.createQueryBuilder()
                .delete()
                .from(LocalPreview)
                .where(`anuncioId=${idAnuncio}`)
                .execute();

            await UniRentDataSource.
                createQueryBuilder()
                .delete()
                .from(`lista_de_interesse`)
                .where(`anuncioId=${idAnuncio}`)
                .execute();

            await anuncioRepository.delete({id : idAnuncio});


            res.status(200).send('DELETADO');
        }catch (err){

         res.status(500).send(err.message);
        }

    }



    public static async detalharAnuncioLogado(req: Request, res: Response){
        try{
            const {idAnuncio} = req.body;
            if(!idAnuncio) throw new Error(`ID inválido! Ele está vazio`);

            let anuncio = await conseguirAnuncio(idAnuncio, true, true, true);

            if(anuncio===null) throw new Error(`Anuncio nao encontrado`);

            anuncio.interessados = anuncio.interessados.map(interessado=>{
                let seguro = interessado;
                 seguro.senha= '***';
                 return seguro;
            })

           res.send(anuncio);
        }catch (err){
            res.status(500).send(`Erro na busca do anúncio. ${err.message}`)
        }
    }

    public static async detalharAnuncioDeslogado(req: Request, res: Response){
        try{
            const {idAnuncio} = req.body;
            if(!idAnuncio) throw new Error(`ID inválido! Ele está vazio`);

            const anuncio = await conseguirAnuncio(idAnuncio, true, false, true);
            res.send(anuncio);
        }catch (err){
            res.status(500).send(`Erro na busca do anúncio. ${err.message}`)
        }

    }


    public static async obterPorUsuario(req:Request, res: Response){
        try{
            const anuncios: Anuncio[] =await  UniRentDataSource.createQueryBuilder()
                .select("anuncio.*")
                .from(Anuncio, "")
                .innerJoin("anuncio.dono","usuario")
                .execute();



                for (const anuncio of anuncios) {
                    const preview = await UniRentDataSource.createQueryBuilder()
                        .select("id,imagem")
                        .from(LocalPreview, "")
                        .where(`anuncioId=:id`, {id : anuncio.id})
                        .execute();
                    anuncio.localPreviews = new Array<LocalPreview>;
                    anuncio.localPreviews.push(preview);
                }


            res.status(200).send(anuncios);

        }catch (err){
            res.status(500).send(err.message)
        }
    }


    public static async listar(req: Request, res: Response) {
        try {
            const listaDeAnuncios = await UniRentDataSource.getRepository(Anuncio).find({});
            res.json(listaDeAnuncios);

        } catch (err) {
            res.json(`Erro na listagem de anuncios: ${err.message}`)
        }

    }


    public static async filtrarPageable(req: Request, res: Response) {
        try {
            let takeFlag = 0;
            let pageFlag = 0;
            let limitFlag = 0;
            let take = (typeof req.query.take !== 'string') ? takeFlag = 1 : Number.parseInt(req.query.take);
            let page = (typeof req.query.page !== 'string') ? pageFlag = 1 : Number.parseInt(req.query.page);
            let limit = (typeof req.query.limit !== 'string') ? limitFlag = 1 : Number.parseInt(req.query.limit);

            if (takeFlag || pageFlag || limitFlag) {
                res.status(400);
                throw new Error(`valor inválido para take,page ou limit`)
            }



            const [result, total] = await AnuncioController.findAllPageable(
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
        } catch (err) {

            res.json(`Ocorreu um problema na listagem paginável de anuncios: ${err.message}`);

        }

    }

    private static async findAllPageable(take: number, page: number, limit: number, filtro: any): Promise<[Anuncio[], number]> {



        return anuncioRepository.findAndCount({
            where: {
                tipoAluguel: Like(filtro.tipoAluguel || "%%"),
                valorAluguel: LessThanOrEqual(Number.parseFloat(filtro.valorAluguel) || Number.MAX_VALUE),
                quartos: LessThanOrEqual(Number.parseInt(filtro.quartos) || Number.MAX_VALUE),
                area: LessThanOrEqual(Number.parseFloat(filtro.area) || Number.MAX_VALUE),
                descricao: Like(`%${filtro.descricaoLike || ""}%` || "%%")

            },
            take: take,
            skip: (page - 1) * (limit)
        })

    }



}