import React from "react";
import "./_catalogo.scss";

const criaturas = [
  {
    nome: "Dragão de Fogo",
    descricao:
      "Um dragão ancestral que vive em cavernas de magma. Seu sopro flamejante pode derreter montanhas.",
  },
  {
    nome: "Fada da Noite",
    descricao:
      "Uma criatura pequena e ágil que vive em bosques sombrios. Usa magia ilusória para enganar viajantes.",
  },
  {
    nome: "Lobo Sombrio",
    descricao:
      "Um predador feroz que ronda as florestas amaldiçoadas. Seus olhos brilham no escuro.",
  },
  {
    nome: "Grifo Dourado",
    descricao:
      "Um ser majestoso, metade águia, metade leão, protetor das ruínas antigas nas montanhas.",
  },
  {
    nome: "Serpente Espectral",
    descricao:
      "Uma serpente translúcida que vive em rios encantados. Seus venenos são usados em poções raras.",
  },
];

const CriaturasPage = () => {
  return (
    <div className="catalogo-container">
      <h1 className="titulo-catalogo">Catálogo: Criaturas</h1>
      <div className="catalogo-lista">
        {criaturas.map((criatura, index) => (
          <div className="catalogo-item" key={index}>
            <h2>{criatura.nome}</h2>
            <p>{criatura.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriaturasPage;






