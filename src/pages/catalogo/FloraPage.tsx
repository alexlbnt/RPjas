import React from "react";
import "./_catalogo.scss"; // Importa o SCSS compartilhado

const flora = [
  {
    nome: "Flor da Lua Silvestre",
    descricao:
      "Floresce apenas sob a luz da lua cheia. Suas pétalas brilham com uma luz prateada.",
  },
  {
    nome: "Raiz Vitalis",
    descricao:
      "Uma raiz nodosa que pulsa com energia vital. Ingrediente chave em poções de cura.",
  },
  {
    nome: "Cogumelo Sussurrante",
    descricao:
      "Dizem que sussurra segredos antigos para aqueles que sabem ouvir. Cuidado com suas ilusões.",
  },
  {
    nome: "Orquídea Espectral",
    descricao:
      "Translúcida e etérea, cresce em locais com forte presença espiritual. Usada em rituais.",
  },
  {
    nome: "Musgo Solar",
    descricao:
      "Absorve a luz do sol durante o dia e a libera lentamente à noite, iluminando cavernas escuras.",
  },
];

const FloraPage = () => {
  return (
    <div className="catalogo-container">
      <h1 className="titulo-catalogo">Catálogo: Flora</h1>
      <div className="catalogo-lista">
        {flora.map((planta, index) => (
          <div className="catalogo-item" key={index}>
            <h2>{planta.nome}</h2>
            <p>{planta.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloraPage;