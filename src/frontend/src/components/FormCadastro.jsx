import React, { useEffect, useState } from "react";
import api from "../services/api.jsx";

import "./FormCadastro.css";

const FormCadastro = ({ entrarOpen }) => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [universidade, setUniversidade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleUniversidade = (event) => {
    setUniversidade(event.target.value);
  };

  useEffect(() => {
    api
      .post("/user", {
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
          valorIPTU: 99,
          comodidades: ["Laje", "Lazeres"],
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
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    entrarOpen();
  };

  return (
    <>
      <form className="form-main" onSubmit={handleSubmit}>
        <label className="label-input">
          <span>Nome completo</span>
          <input
            type="text"
            name="nomeCompleto"
            onChange={(event) => setNomeCompleto(event.target.value)}
            value={nomeCompleto}
          />
        </label>
        <label className="label-input">
          <span>Telefone</span>
          <input
            type="tel"
            name="telefone"
            onChange={(event) => setTelefone(event.target.value)}
            placeholder="(XX) X XXXX-XXXX"
            value={telefone}
            required
          />
        </label>
        <label className="label-input">
          <span>Universidade (opcional)</span>
          <select
            onChange={handleUniversidade}
            value={universidade}
            placeholder="Selecione"
          >
            <option value=""> Selecione </option>
            <option value="UFG">Universidade Federal de Goiás</option>
            <option value="PUC">PUC - Campus IV</option>
          </select>
        </label>
        <label className="label-input">
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <label className="form-entrar">
          <span> Senha </span>
          <input
            type="password"
            name="password"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
        </label>
        <input type="submit" value="Cadastrar" />
      </form>
    </>
  );
};

export default FormCadastro;
