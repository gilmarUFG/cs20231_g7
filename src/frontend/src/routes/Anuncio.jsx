import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api.jsx";

const Anuncio = () => {
  const { id } = useParams();

  // useEffect(() => {
  //     api.post('http://localhost:3000/anuncio/detalharLogado', {
  //         idAnuncio: id,
  //         token: ''
  //     }).then(

  //     )

  //     api.get('http://localhost:3000/anuncio/detalharLogado?id=' + id)
  // }, [])

  return <div>Anuncio: {id}</div>;
};

export default Anuncio;
