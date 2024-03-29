import { UniRentDataSource } from "../config/UniRentDataSource.js";
import { Usuario } from "../entity/Usuario.js";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { Environment } from "../config/Environment.js";
import chalk from "chalk";


export interface DadosIniciais {
    fotoDePerfil: string;
    email: string;
    senha: string;
    nome: string;
    universidade: string;
}


export interface DadosNaoSensiveis {
    id: number; //todo TROCAR ESSE TIPO
    email: string;
    nome: string;

    telefone: string;
}
const UsuarioRepository = UniRentDataSource.getRepository(Usuario);


export class UsuarioController {
    static async seInteresar(req: Request, res: Response) {
        try{
            const {anuncioId} = req.body;
            const {usuarioId} = req.body;

            await UniRentDataSource.createQueryBuilder().
                insert()
                .into("lista_de_interesse")
                .values([
                    {anuncioId : anuncioId , usuarioId: usuarioId}
                ]).execute();

            res.status(200).send();

        }catch (err){
            res.status(500).send(`Erro na operação de se interessar. ${err.message}`)
        }


    }

    public static async cadastrar(req: Request, res: Response) {
        try {
            const { email, senha, nome, universidade }: DadosIniciais = req.body;
            UsuarioController.isBodyValido(req.body, res);

            if ((await UsuarioRepository.findOneBy({ email: email })) !== null) {
                res.status(500);
                throw new Error(`email já cadastrado`);
            }

            const usuario = new Usuario().withProperties(req.body);

            await UsuarioRepository.save(usuario);

            const token = jwt.sign({ id: usuario.id }, Environment.SECRET_KEY);

            usuario.senha = ''

            res.json({usuario :usuario ,token: token }).status(201);//created

        } catch (err) {


            res.json(`ERRO NO CADASTRO: ${err.message}`);
        }

    }



    private static isBodyValido({ email, senha }, res: Response) {


        if (senha == null || email == null) {
            res.status(400);
            throw new Error(`email ou senha nulo(s)`)
        }


        if (email.replace(/\s/g, '') == '' || senha.replace(/\s/g, '') == '') {
            res.status(400);
            throw new Error(`email ou senha em branco(s).`)
        }


    }

    public static async login(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;
            UsuarioController.isBodyValido({ email, senha }, res);

            const usuario = await UsuarioRepository.findOneBy({ email: email });

            if (usuario === null) {
                res.status(500);
                throw new Error(`Usuario de email ${email} não cadastrado`);
            }

            if (senha !== usuario.senha) {
                res.status(500);
                throw new Error(`Email ou senha incorretos`);
            }


            const token = jwt.sign({ id: usuario.id }, Environment.SECRET_KEY);
            usuario.senha= '';
            res.json({ usuario : usuario,token: token });

        } catch (err) {
            res.json(`ERRO NO LOGIN: ${err.message}`);
        }
    }


    public static async listar(req: Request, res: Response) {
        try {
            const listaDeUsers = await UsuarioRepository.find();

            const listaSegura = listaDeUsers.map((usuarioCompleto) => {
                let { id, nome, email, telefone }: DadosNaoSensiveis = usuarioCompleto;
                return { id, nome, email, telefone };
            })

            res.json(listaSegura);
        } catch (err) {
            res.sendStatus(500);

        }

    }

    public static async obter(req: Request, res: Response){
        try{
            const usuario = await UniRentDataSource.getRepository(Usuario).find({where : {id: Number.parseInt(req.params.id)}})
            res.json(usuario);
        }catch (err){
            res.status(500).send(err.message);
        }
    }

    public static async verificarToken(req: Request, res: Response, next: NextFunction) {
        try {
            const { token } = req.body;
            jwt.verify(token, Environment.SECRET_KEY);


            next();
        } catch (err) {
            res.status(500).json(`Toekn inválido: ${err}`);
        }
    }
}