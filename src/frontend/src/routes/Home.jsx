import React from "react";
import ImagemPredio from "../components/ImagemPredio";
import "./Home.css";
import FormHome from "../components/FormHome";
import CardAnuncios from "../components/CardAnuncios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api.jsx";

const Home = () => {
  const [data, setMyData] = useState([]);

  useEffect(() => {
    api
      .get(`/anuncio/listarTodos`)
      .then((response) => {
        setMyData(response.data);
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro!" + err);
      });
  }, []);

  return (
    <div className="home-organizada">
      <div className="tres-coisas-in">
        <ImagemPredio />
        <div className="ola-mundo">
          <h1 className="titulo-home">Encontre imóveis próximos à faculdade</h1>
          {/* <div>
            <FormHome />
          </div> */}
        </div>
      </div>
      <div>
        <div className="ver-anuncios">
          <h3>Anúncios Recentes</h3>
          <Link to="/alugar">Ver mais</Link>
        </div>
        <div>
          <div className="cards">
            {data?.map((item) => (
              <CardAnuncios key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
