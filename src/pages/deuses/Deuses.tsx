// src/pages/deuses/Deuses.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./_deuses.scss";

const deuses = [
  {
    nome: "Tanathos",
    titulo: "Deus da Morte e das Maldições",
    descricao: "Tanathos governa o fim da vida, sendo temido por uns e reverenciado por outros. Seus cultos são ocultos e envoltos em sombras.",
    imagem: "/deus1.png",
  },
  {
    nome: "Vitta",
    titulo: "Deusa da Vida e das Bençãos",
    descricao: "Venerada por curandeiros e agricultores, Vitta simboliza a renovação, a fertilidade e a esperança.",
    imagem: "/deus2.png",
  },
  {
    nome: "Arkhé",
    titulo: "Deus da Justiça e da Magia",
    descricao: "Arkhé representa o equilíbrio entre ordem e poder arcano. Seus templos são centros de estudo e julgamento.",
    imagem: "/deus3.png",
  },
];

const Deuses = () => {
  return (
    <div className="deuses-container">
      <h1 className="titulo-pagina">Deuses do Mundo</h1>
      {deuses.map((deus, index) => (
        <Link to={`/deuses/${index}`} key={index} className="deus-link">
          <div className={`deus-bloco ${index % 2 === 0 ? "normal" : "invertido"}`}>
            <img src={deus.imagem} alt={deus.nome} />
            <div className="deus-info">
              <h2>{deus.nome}</h2>
              <h3>{deus.titulo}</h3>
              <p>{deus.descricao}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Deuses;
