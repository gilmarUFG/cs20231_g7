import { useState } from "react";
import api from "../services/api.jsx";
import "./Anunciar.css";
import Uploader from "../components/Uploader/index.jsx";
import { Link } from "react-router-dom";

const Anunciar = () => {
  const [titulo, setTitulo] = useState("");
  const [tipoMoradia, setTipoMoradia] = useState("");
  const [descricao, setDescricao] = useState("");
  const [precoAluguel, setPrecoAluguel] = useState("");
  const [precoCondominio, setPrecoCondominio] = useState("");
  const [precoIPTU, setPrecoIPTU] = useState("");
  const [quantidadeQuartos, setQuantidadeQuartos] = useState("");
  const [areaMetros, setAreaMetros] = useState("");
  const [vagas, setVagas] = useState("");
  const [verRadio, setVerRadio] = useState("");
  const [universidade, setUniversidade] = useState("");
  const [comodidades, setComodidades] = useState("");
  const [endereco, setEndereco] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    setTipoMoradia(event.target.value);
  };

  const cadastrarAnuncio = {
    usuarioId: 2,
    anuncio: {
      titulo: titulo,
      tipoAluguel: "LOCAÇÃO",
      tipoImovel: tipoMoradia,
      quartos: quantidadeQuartos,
      area: areaMetros,
      vagasGaragem: vagas,
      aceitaAnimais: verRadio,
      valorAluguel: precoAluguel,
      valorCondominio: precoCondominio,
      valorIPTU: precoIPTU,
      comodidades: comodidades,
      endereco: endereco,
      descricao: descricao,
      imagens: [image],
      localizacaoGoogleMaps: localizacao,
      universidadesProximas: universidade,
    },
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyMTg2NzU1fQ.PLkrRzK7YN-3ArjQMBxeCYjZaYTtUCRWeqfboPt8s00",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    api
      .post("/anuncio/cadastrar", cadastrarAnuncio)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="main-div">
          <h3>Informações gerais</h3>
          <div className="div-dois">
            <label className="label-input">
              <span>Título</span>
              <input
                type="text"
                name="titulo"
                placeholder="Digite o título"
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo}
              />
            </label>
            <label className="label-input">
              <span>Tipo de aluguel</span>
              <select
                onChange={handleChange}
                value={tipoMoradia}
                placeholder="Tipo de Aluguel"
              >
                <option value=""> Selecione </option>
                <option value="Apartamento">Apartamento</option>
                <option value="Casa">Casa</option>
                <option value="Republica">República</option>
              </select>
            </label>
          </div>
          <div>
            <div>
              <label className="label-escrever">
                <span>Descrição</span>
                <input
                  type="text"
                  name="descricao"
                  placeholder="Adicionar descrição"
                  onChange={(e) => setDescricao(e.target.value)}
                  value={descricao}
                />
              </label>
            </div>
            <div className="div-com-tres">
              <label className="label-input">
                <span>Preço do Aluguel</span>
                <input
                  type="number"
                  name="precoAluguel"
                  onChange={(e) => setPrecoAluguel(e.target.value)}
                  value={precoAluguel}
                />
              </label>
              <label className="label-input">
                <span>Preço do Condomínio</span>
                <input
                  type="number"
                  name="precoCondominio"
                  onChange={(e) => setPrecoCondominio(e.target.value)}
                  value={precoCondominio}
                />
              </label>
              <label className="label-input">
                <span>Preço do IPTU</span>
                <input
                  type="number"
                  name="precoIPTU"
                  onChange={(e) => setPrecoIPTU(e.target.value)}
                  value={precoIPTU}
                />
              </label>
            </div>
            <div>
              <label className="label-input">
                <span>Quantidade de Quartos</span>
                <input
                  type="number"
                  name="quantidadeQuartos"
                  onChange={(e) => setQuantidadeQuartos(e.target.value)}
                  value={quantidadeQuartos}
                />
              </label>
              <label className="label-input">
                <span>Área (M²)</span>
                <input
                  type="number"
                  name="area"
                  onChange={(e) => setAreaMetros(e.target.value)}
                  value={areaMetros}
                />
              </label>
              <label className="label-input">
                <span>Vagas na Garagem</span>
                <input
                  type="number"
                  name="vagas"
                  onChange={(e) => setVagas(e.target.value)}
                  value={vagas}
                />
              </label>
              <div>
                <span>Aceita animais?</span>
                <br />
                <input
                  id="yes"
                  type="radio"
                  value="sim"
                  name="allow-pet"
                  onClick={(event) => setVerRadio(event.target.value)}
                />
                Sim
                <input
                  className="radio-1"
                  id="not"
                  type="radio"
                  value="nao"
                  name="allow-pet"
                  onClick={(event) => setVerRadio(event.target.value)}
                />
                Não
              </div>
              <label className="label-escrever">
                <span>
                  <h4>Universidades Próximas</h4>
                </span>
                <input
                  type="text"
                  name="universidade"
                  placeholder="Adicionar nome da universidade"
                  onChange={(e) => setUniversidade(e.target.value)}
                  value={universidade}
                />
              </label>
            </div>
          </div>
          <label className="label-escrever">
            <span>
              <h4>Comodidades</h4>
            </span>
            <input
              type="text"
              name="comodidades"
              placeholder="Adicionar as comodidades do imóvel"
              onChange={(e) => setComodidades(e.target.value)}
              value={comodidades}
            />
          </label>
          <label className="label-escrever">
            <span>
              <h4>Endereço</h4>
            </span>
            <input
              type="text"
              name="endereco"
              placeholder="Adicione o endereço completo do imóvel"
              onChange={(e) => setEndereco(e.target.value)}
              value={endereco}
            />
          </label>
          <label className="label-escrever">
            <span>
              <h4>Localização</h4>
            </span>
            <input
              type="text"
              name="localizacao"
              placeholder="Adicione a URL da localização do imóvel"
              onChange={(e) => setLocalizacao(e.target.value)}
              value={localizacao}
            />
          </label>
          <Uploader setImage={setImage} />
        </div>
        <input
          className="submit-style"
          type="submit"
          value="Publicar anúncio"
        />
      </form>
    </>
  );
};

export default Anunciar;
