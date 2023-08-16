import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn,ManyToMany } from "typeorm";
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

    @OneToMany(()=> Anuncio, anuncio=> anuncio.dono, {cascade: true})
    anuncios: Anuncio[];

    @Column("longtext",{
        name: "foto_de_perfil",
        nullable: true,

    })
    fotoDePerfil: string;


    @Column({
        nullable: true
    })
    telefone: string;

    @ManyToMany(()=>Anuncio, anun=>anun.interessados)
    listaDeInteresse: Anuncio[];




    withProperties(propriedades:DadosIniciais){
        this.email = propriedades.email;
        this.senha = propriedades.senha;
        this.nome = propriedades.nome;
        this.universidade = propriedades.universidade;
        this.fotoDePerfil = propriedades.fotoDePerfil;
        this.anuncios = [];
        return this;
    }




}