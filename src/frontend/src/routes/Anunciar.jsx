import { useState } from "react";
import "./Anunciar.css"

const Anunciar = () => {

  const [titulo, setTitulo] = useState('');
  const [tipoMoradia, setTipoMoradia] = useState('');
  const [descricao, setDescricao] = useState('');
  const [precoAluguel, setPrecoAluguel] = useState('');
  const [precoCondominio, setPrecoCondominio] = useState('');
  const [precoIPTU, setPrecoIPTU] = useState('');
  const [quantidadeQuartos, setQuantidadeQuartos] = useState('');
  const [areaMetros, setAreaMetros] = useState('');
  const [vagas, setVagas] = useState('');
  const [verRadio, setVerRadio] = useState('');
  const [universidade, setUniversidade] = useState('');



  const handleChange = (event) => {
    setTipoMoradia(event.target.value);
  };

  const handleUniversidades = (event) => {
    setUniversidade(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    setPesquisar('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Informações gerais</h3>
        <div className="main-div">
          <div className="div-dois">
            <label className="label-input">
              <span>Título</span>
              <input
                type="text"
                name='titulo'
                placeholder="Digite o título"
                onChange={(e) => (setTitulo(e.target.value))}
                value={titulo}
              />
            </label>
            <label className="label-input">
              <span>Tipo de aluguel</span>
              <select onChange={handleChange} value={tipoMoradia} placeholder='Tipo de Aluguel'>
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
                  name=''
                  placeholder="Adicionar descrição"
                  onChange={(e) => (setDescricao(e.target.value))}
                  value={descricao}
                />
              </label>
            </div>
            <div className="div-com-tres">
              <label className="label-input">
                <span>Preço do Aluguel</span>
                <input
                  type="text"
                  name='precoAluguel'
                  onChange={(e) => (setPrecoAluguel(e.target.value))}
                  value={precoAluguel}
                />
              </label>
              <label className="label-input">
                <span>Preço do Condomínio</span>
                <input
                  type="text"
                  name='precoCondominio'
                  onChange={(e) => (setPrecoCondominio(e.target.value))}
                  value={precoCondominio}
                />
              </label>
              <label className="label-input">
                <span>Preço do IPTU</span>
                <input
                  type="text"
                  name='precoIPTU'
                  onChange={(e) => (setPrecoIPTU(e.target.value))}
                  value={precoIPTU}
                />
              </label>
            </div>
            <div>
              <label className="label-input">
                <span>Quantidade de Quartos</span>
                <input
                  type="text"
                  name='quantidadeQuartos'
                  onChange={(e) => (setQuantidadeQuartos(e.target.value))}
                  value={quantidadeQuartos}
                />
              </label>
              <label className="label-input">
                <span>Área (M²)</span>
                <input
                  type="text"
                  name='area'
                  onChange={(e) => (setAreaMetros(e.target.value))}
                  value={areaMetros}
                />
              </label>
              <label className="label-input">
                <span>Vagas na Garagem</span>
                <input
                  type="text"
                  name='vagas'
                  onChange={(e) => (setVagas(e.target.value))}
                  value={vagas}
                />
              </label>
              <div onChange={(event) => (setVerRadio(event.target.value))}>
                <span>Aceita animais?</span>
                <br />
                <input type="radio" value="sim" name="permitido" /> Sim
                <input className="radio-1" type="radio" value="onibus" name="permitido" /> Não
              </div>
              <label className="label-input">
                <span>Universidades Próximas</span>
                <select onChange={handleUniversidades} value={universidade} placeholder='Selecione'>
                  <option value=""> Selecione </option>
                  <option value="UFG">Universidade Federal de Goiás - Campus Colemar Natal e Silva </option>
                  <option value="PUC">PUC - Campus IV</option>
                </select>
              </label>
            </div>
          </div>
          <br />
          <h3>Comodidades</h3>
          <div>
           <h1>Adicionar o select</h1>
          </div>
          <br />
          <h3>Localização</h3>
          <div>
            <h1>Localização ??????????????????????????????</h1>
          </div>
          <h3>Fotos</h3>
          <div>
            <h1>Selecionar fotos</h1>
          </div>
        </div>
        <input className='submit-style' type="submit" value='Publicar anúncio' />
      </form>
    </>
  )
}

export default Anunciar;