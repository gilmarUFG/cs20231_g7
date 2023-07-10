import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Anuncio } from "./Anuncio.js";

@Entity()
export class Universidade{

    @PrimaryGeneratedColumn()
    id;

    @Column()
    nome: string;

    @Column()
    endereco: string;

    @ManyToOne(() => Anuncio, (anuncio) => anuncio.universidadesProximas)
    anuncioProximo: Anuncio;



}