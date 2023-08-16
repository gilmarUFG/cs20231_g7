import { useState } from "react";
import api from "../services/api.jsx";
import "./Anunciar.css";
import Uploader from "../components/Uploader/index.jsx";

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
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    setTipoMoradia(event.target.value);
  };

  const handleUniversidades = (event) => {
    setUniversidade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    api
      .post("/anuncio/cadastrar", {
        usuarioId: 2,
        anuncio: {
          tipoAluguel: "REPUBLICA",
          tipoImovel: "APARTAMENTO",
          quartos: 5,
          area: 8956,
          vagasGaragem: 1,
          aceitaAnimais: true,
          valorAlguel: 1500.99,
          valorCondominio: 15.5,
          valorIPTU: precoIPTU,
          comodidades: ["Laje", "Lazeres"],
          imagens: [image],
          descricao: "Apartamento aconchegante longe do centro da cidade.",
          localizacaoGoogleMaps: "https://goo.gl/maps/E616gZfVdWCGbnNX7",
          imagens: ["IMAGEM1", "IMAGEM2", "IMAGEM3"],
          universidadesProximas: ["Uni Universitaria"],
        },

        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjkxOTg0NDQzfQ.CQZNB1MWIilJU9BkToiuJ6VQ3W2aIqos-_Rc3mYbScA",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <h3>Informações gerais</h3>
        <div className="main-div">
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
              <label className="label-input">
                <span>Descrição</span>
                <input
                  type="text"
                  name=""
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
                  type="text"
                  name="precoAluguel"
                  onChange={(e) => setPrecoAluguel(e.target.value)}
                  value={precoAluguel}
                />
              </label>
              <label className="label-input">
                <span>Preço do Condomínio</span>
                <input
                  type="text"
                  name="precoCondominio"
                  onChange={(e) => setPrecoCondominio(e.target.value)}
                  value={precoCondominio}
                />
              </label>
              <label className="label-input">
                <span>Preço do IPTU</span>
                <input
                  type="text"
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
                  type="text"
                  name="quantidadeQuartos"
                  onChange={(e) => setQuantidadeQuartos(e.target.value)}
                  value={quantidadeQuartos}
                />
              </label>
              <label className="label-input">
                <span>Área (M²)</span>
                <input
                  type="text"
                  name="area"
                  onChange={(e) => setAreaMetros(e.target.value)}
                  value={areaMetros}
                />
              </label>
              <label className="label-input">
                <span>Vagas na Garagem</span>
                <input
                  type="text"
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
              <label className="label-input">
                <span>Universidades Próximas</span>
                <select
                  onChange={handleUniversidades}
                  value={universidade}
                  placeholder="Selecione"
                >
                  <option value=""> Selecione </option>
                  <option value="UFG">
                    Universidade Federal de Goiás - Campus Colemar Natal e Silva{" "}
                  </option>
                  <option value="PUC">PUC - Campus IV</option>
                </select>
              </label>
            </div>
          </div>
          <br />
          <h3>Comodidades </h3>
          <div>
            <h1>Adicionar o select</h1>
          </div>
          <br />
          <h3>Localização</h3>
          <div>
            <h1>Localização ??????????????????????????????</h1>
          </div>
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
