import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario.js";
import { AnuncioDadosIniciais } from "../controller/AnuncioController.js";

@Entity()
export class Anuncio{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @ManyToOne(()=>Usuario, usuario=> usuario.anuncios)
    usuario: Usuario;


    withProperties(body: AnuncioDadosIniciais) {
        this.descricao = body.descricao;
        return this;
    }
}