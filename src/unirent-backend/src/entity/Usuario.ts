import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioDadosIniciais } from "../controller/UsuarioController.js";




@Entity()
export class Usuario {

    @PrimaryGeneratedColumn("increment")
    id: string;

    @Column({
        length: 30
    })
    email: string;

    @Column({
        length: 500
    })
    @Column()
    senha: string;

    @Column()
    nome: string;

    @Column()
    universidade: String;


    withProperties(propriedades:(UsuarioDadosIniciais)){
        this.email = propriedades.email;
        this.senha = propriedades.senha;
        this.nome = propriedades.nome;
        this.universidade = propriedades.universidade;
        return this;
    }




}