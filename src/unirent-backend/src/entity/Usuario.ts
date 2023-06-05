import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DadosIniciais } from "../controller/UsuarioController.js";
import { Anuncio } from "./Anuncio.js";




@Entity()
export class Usuario {

    @PrimaryGeneratedColumn("increment")
    id: number;

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

    @OneToMany(()=> Anuncio, anuncio=> anuncio.usuario, {cascade: true})
    anuncios: Anuncio[];


    withProperties(propriedades:DadosIniciais){
        this.email = propriedades.email;
        this.senha = propriedades.senha;
        this.nome = propriedades.nome;
        this.universidade = propriedades.universidade;
        this.anuncios = [];
        return this;
    }




}