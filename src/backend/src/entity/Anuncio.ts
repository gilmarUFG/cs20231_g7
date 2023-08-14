import { Column, Entity, IntegerType, ManyToOne, OneToMany,ManyToMany,PrimaryGeneratedColumn, JoinTable} from "typeorm";
import { Usuario } from "./Usuario.js";
import { AnuncioDadosIniciais } from "../controller/AnuncioController.js";
import { TipoAluguel } from "../enums/TipoAluguel.js";
import { TipoImovel } from "../enums/TipoImovel.js";
import { JoinColumn } from "typeorm";
import { LocalPreview } from "./LocalPreview.js";



@Entity()
export class Anuncio{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    endereco: string;

    @Column({type: 'enum', enum: TipoAluguel, default: TipoAluguel.LOCACAO})
     tipoAluguel: TipoAluguel;

    @ManyToOne(()=>Usuario, usuario=> usuario.anuncios)
    usuario: Usuario;

    @Column({
        type : 'date',
        name : "data_publicacao"
    })
    dataPublicacao: Date;


    @Column({type: 'enum', enum: TipoImovel, default: TipoImovel.DEFAULT, name: "tipo_imovel"})
    tipoImovel: TipoImovel;

    @Column('int')
    quartos: number;
    @Column('double')
    area: number;

    @Column({
        type : 'int',
        name : "vagas_garagem"
    })
    vagasGaragem: number;

    @Column({
        type: 'boolean',
        name: "aceita_animais"
    })
    aceitaAnimais: boolean;

    @Column({
        type : 'double',
        name : "valor_aluguel"
    } )
    valorAluguel: number;

    @Column('double')
    valorCondominio: number;

    @Column({
        type : 'double',
        name : "valor_IPTU"
    })
    valorIPTU: number;

    @Column('simple-array')
    comodidades: string[];

    @Column()
    descricao: string;



    @Column({
        name : "localizacao_google_maps",
        nullable: true
    })
    loacalizacaoGoogleMaps: string;

    @Column('simple-array',{
        name: "universidades_proximas",
    })
    universidadesProximas : string[]

    @OneToMany(()=>LocalPreview, localPreview=>localPreview.anuncio, {
        cascade: true
    })
    localPreviews: LocalPreview[];


    @ManyToMany(()=>Usuario, user=>user.listaDeInteresse)
    @JoinTable({
        name: "lista_de_interesse"
    })
    interessados: Usuario[];



    withProperties(body: AnuncioDadosIniciais) {

        this.tipoAluguel = body.tipoAluguel;
        this.dataPublicacao = new Date();
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
        this.loacalizacaoGoogleMaps = body?.localizacaoGoogleMaps;
        console.log(body)
        this.universidadesProximas = body.universidadesProximas;
        return this;
    }
}