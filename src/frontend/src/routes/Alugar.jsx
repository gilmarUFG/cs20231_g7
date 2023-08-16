import { useEffect, useState } from "react";
import CardAnuncios from "../components/CardAnuncios.jsx";
import api from "../services/api.jsx";
import { Link } from "react-router-dom";

const Alugar = () => {
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
    <div>
      {data?.map((item) => (
        <Link
          style={{ textDecoration: "none" }}
          key={item.id}
          to={`/alugar/anuncio/${item.id}`}
        >
          <CardAnuncios data={item} />
        </Link>
      ))}
    </div>
  );
};

export default Alugar;
