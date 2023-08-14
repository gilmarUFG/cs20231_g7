import { Column, Entity, IntegerType, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Anuncio } from "./Anuncio.js";

@Entity()
export class LocalPreview{
    constructor(imagem: string, anuncio: Anuncio) {
        this.anuncio = anuncio;
        this.imagem = imagem;
    }


    @PrimaryGeneratedColumn()
    id: number;

    @Column("longtext",{
        nullable : true,
    })
    imagem: string;

    @ManyToOne(()=>Anuncio, anuncio=>anuncio.localPreviews, {
        cascade: false
    })
    anuncio: Anuncio;


}