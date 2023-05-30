import { UniRentDataSource } from "../config/UniRentDataSource.js";
import { Usuario } from "../entity/Usuario.js";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { Environment } from "../config/Environment.js";
import chalk from "chalk";


export interface UsuarioDadosIniciais{
    email: string;
    senha: string;
    nome: string;
    universidade: string;
}
export class UsuarioController{

    public static async cadastrar(req: Request, res: Response){
        const dadosIniciais: UsuarioDadosIniciais = req.body;

        try{
            //checar se já existe cadastro
            if(
                (await UniRentDataSource.getRepository(Usuario).findOneBy({email: dadosIniciais.email})) !==null
            )
                throw new Error(`Usuario já cadastrado`)

        // salvar novo cadastro
        //const usuario = req.body;
            const usuario = new Usuario().withProperties(dadosIniciais);


        await UniRentDataSource.getRepository(Usuario).save(usuario);

        //criar JWT e retorná-lo
        const token = jwt.sign(dadosIniciais,Environment.SECRET_KEY);

        //const token = jwt.sign({email: dadosIniciais.email, senha: dadosIniciais.senha},Environment.SECRET_KEY);


            res.json({token: token}).status(201);//created

        }catch (err){
            res.json(`Ocorreu um erro no cadastro: ${err.message}`).status(500);
        }

    }

    public static async login(req: Request, res: Response){
        try{
           const {email,senha} = req.body;
           const usuario =  await UniRentDataSource.getRepository(Usuario).findOneBy({email: email});

           if(usuario===null) throw new Error(`Usuario de email ${email} não cadastrado`);

           if(senha !== usuario.senha) throw new Error(`Email ou senha incorretos`);


            const token = jwt.sign(Object.assign({}, usuario), Environment.SECRET_KEY);
            res.json({token: token});

        }catch (err){
            res.status(500).json(err.message);
        }
    }


public static async listarUsuarios(req: Request, res: Response){
        try{
            res.json(await UniRentDataSource.getRepository(Usuario).find()).status(200).send();
        }catch (err){
            res.sendStatus(500);

        }

}
    public static async verificarToken(req: Request, res: Response, next: NextFunction){
        console.log(`verificando o ${req.body.token}}`)
        try {
            const {token} = req.body;
          jwt.verify(token, Environment.SECRET_KEY);


            next();
        }catch (err){
            res.status(500).json(`Toekn inválido: ${err}`);
        }
    }







}