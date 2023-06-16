import { Column, Entity, IntegerType, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario.js";
import { AnuncioDadosIniciais } from "../controller/AnuncioController.js";
import { TipoAluguel } from "../enums/TipoAluguel.js";
import { TipoImovel } from "../enums/TipoImovel.js";
import { JoinColumn } from "typeorm";
import { Universidade } from "./Universidade.js";



@Entity()
export class Anuncio{
    /*
    valores envolvidos,
    endereço e
    características do imóvel
     */
    @PrimaryGeneratedColumn()
    id: string;

    @Column({type: 'enum', enum: TipoAluguel, default: TipoAluguel.LOCACAO})
     tipoAluguel: TipoAluguel;

    @ManyToOne(()=>Usuario, usuario=> usuario.anuncios)
    usuario: Usuario;

    @Column('date', {})
    dataPublicacao: Date;

    @Column({type: 'enum', enum: TipoImovel, default: TipoImovel.DEFAULT})
    tipoImovel: TipoImovel;

    @Column('int')
    quartos: number;
    @Column('double')
    area: number;

    @Column('int')
    vagasGaragem: number;

    @Column('boolean')
    aceitaAnimais: boolean;

    @Column('double' )
    valorAluguel: number;

    @Column('double')
    valorCondominio: number;

    @Column('double')
    valorIPTU: number;

    @Column('simple-array')
    comodidades: string[];

    @Column()
    descricao: string;



    @OneToMany(()=>Universidade,(universidade)=>universidade.anuncioProximo)
    universidadesProximas: Universidade[];




/*
"tipoAluguel": "",
        "valorAluguel": ,
        "tamanho": ,
        "quartos": ,
        "descricaoLike": ""
 */


    withProperties(body: AnuncioDadosIniciais) {
        let x = body.tipoAluguel;

        this.tipoAluguel = body.tipoAluguel;
        this.dataPublicacao = body.dataPublicacao;
        this.tipoImovel = body.tipoImovel;
        this.quartos = body.quartos;
        this.area = body.area;
        this.vagasGaragem = body.vagasGaragem;
        this.aceitaAnimais = body.aceitaAnimais;
        this.valorAluguel = body.valorAlguel;
        this.valorCondominio = body.valorCondominio;
        this.valorIPTU = body.valorIPTU;
        this.comodidades = body.comodidades;
        this.descricao = body.descricao;
        return this;
    }
}