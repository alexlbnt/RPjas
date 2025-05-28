import React from "react";
import "./_catalogo.scss"; // Importa o SCSS compartilhado

const minerios = [
  {
    nome: "Pedra de Ferro",
    descricao:
      "Um minério básico, encontrado em abundância. Essencial para as primeiras ferramentas e armaduras.",
  },
  {
    nome: "Cristal Reluzente",
    descricao:
      "Emite um brilho suave. Usado em artefatos de luz e poções de clarividência.",
  },
  {
    nome: "Obsidiana Vulcânica",
    descricao:
      "Vidro vulcânico negro, extremamente afiado. Perfeito para lâminas ritualísticas.",
  },
  {
    nome: "Mithril Profundo",
    descricao:
      "Leve como pena, resistente como escamas de dragão. Encontrado apenas nas profundezas da terra.",
  },
  {
    nome: "Geodo Cósmico",
    descricao:
      "Seu interior revela galáxias em miniatura. Dizem conter a essência das estrelas.",
  },
];

const MineriosPage = () => {
  return (
    <div className="catalogo-container">
      <h1 className="titulo-catalogo">Catálogo: Minérios</h1>
      <div className="catalogo-lista">
        {minerios.map((minerio, index) => (
          <div className="catalogo-item" key={index}>
            <h2>{minerio.nome}</h2>
            <p>{minerio.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MineriosPage;