import React from "react";
import "./_catalogo.scss"; // Importa o SCSS compartilhado

const itens = [
  {
    nome: "Pena de Grifo Real",
    descricao:
      "Uma pena leve e incrivelmente resistente, retirada de um Grifo. Ótima para flechas de precisão.",
  },
  {
    nome: "Escama de Dragão Ígneo",
    descricao:
      "Resiste a temperaturas extremas. Pode ser forjada em armaduras protetoras contra fogo.",
  },
  {
    nome: "Orbe da Tempestade",
    descricao:
      "Contém a fúria de uma tempestade aprisionada. Pode liberar raios quando ativada.",
  },
  {
    nome: "Pó de Fada Estelar",
    descricao:
      "Brilha com a luz de mil estrelas. Usado para encantar objetos ou criar ilusões cintilantes.",
  },
  {
    nome: "Fragmento de Coração Ancestral",
    descricao:
      "Um pedaço petrificado do coração de um golem antigo. Pulsa com uma energia terrena.",
  },
];

const ItensPage = () => {
  return (
    <div className="catalogo-container">
      <h1 className="titulo-catalogo">Catálogo: Itens Raros</h1>
      <div className="catalogo-lista">
        {itens.map((item, index) => (
          <div className="catalogo-item" key={index}>
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItensPage;