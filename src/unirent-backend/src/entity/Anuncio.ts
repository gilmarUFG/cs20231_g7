import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario.js";
import { AnuncioDadosIniciais } from "../controller/AnuncioController.js";
import { TipoMoradia } from "../enums/TipoMoradia.js";

@Entity()
export class Anuncio{
    /*
    valores envolvidos,
    endereço e
    características do imóvel
     */
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    titulo: string;

    @Column()
    endereco: string; //todo criar uma classe para isso

    @Column({type: 'enum', enum: TipoMoradia, default: TipoMoradia.LOCACAO})
     tipoMoradia: TipoMoradia;

    @Column()
    descricao: string;

    @ManyToOne(()=>Usuario, usuario=> usuario.anuncios)
    usuario: Usuario;


    withProperties(body: AnuncioDadosIniciais) {
        this.tipoMoradia = body.tipoMoradia;
        this.titulo = body.titulo;
        this.descricao = body.descricao;
        return this;
    }
}