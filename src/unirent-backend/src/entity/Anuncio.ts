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
     tipoMoradia: TipoAluguel;

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
    valorAlguel: number;

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






    withProperties(body: AnuncioDadosIniciais) {
        this.descricao = body.descricao;

        return this;
    }
}