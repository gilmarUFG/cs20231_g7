import "./FormEntrar.css";
import { useState } from "react";
import api from "../services/api";

export default function FormEntrar({ setLogin, entrarClose }) {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  const login = {
    email: email,
    senha: senha,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogin(true);

    api
      .post("/usuario/login", login)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    entrarClose();
  };

  return (
    <form className="form-entrar" onSubmit={handleSubmit}>
      <label>
        <span> E-mail </span>
        <input
          type="email"
          name="name"
          placeholder="Insira seu email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        <span> Senha </span>
        <input
          type="password"
          name="password"
          placeholder="Insira sua senha"
          onChange={(event) => setSenha(event.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
