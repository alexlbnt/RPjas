import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDragon, FaGem, FaLeaf, FaBoxOpen } from "react-icons/fa";
import "./_compendio.scss";

const compendioData = [
  {
    titulo: "Criaturas",
    descricao:
      "Descubra as criaturas místicas que habitam o mundo de HG, desde dragões imponentes até pequenas fadas travessas.",
    icone: <FaDragon />,
    rota: "/criaturas",
  },
  {
    titulo: "Minérios",
    descricao:
      "Os minérios encontrados nas profundezas das montanhas possuem poderes mágicos e são essenciais para forjar armas lendárias.",
    icone: <FaGem />,
    rota: "/minerios",
  },
  {
    titulo: "Flora",
    descricao:
      "A flora exótica do mundo de HG oferece ingredientes raros para poções, encantamentos e rituais antigos.",
    icone: <FaLeaf />,
    rota: "/flora",
  },
  {
    titulo: "Itens",
    descricao:
      "Itens lendários, relíquias perdidas e artefatos poderosos que moldaram a história deste universo.",
    icone: <FaBoxOpen />,
    rota: "/itens",
  },
];

const Compendio = () => {
  const navigate = useNavigate();

  return (
    <div className="compendio-container">
      <h1 className="titulo-principal">Compêndio do Mundo de HG</h1>
      <div className="cards-compendio">
        {compendioData.map((secao, index) => (
          <div className="card-compendio" key={index}>
            <div className="icone">{secao.icone}</div>
            <h2>{secao.titulo}</h2>
            <p>{secao.descricao}</p>
            <button
              className="ver-mais-btn"
              onClick={() => navigate(secao.rota)}
            >
              Ver Mais
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compendio;
