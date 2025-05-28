import React from "react";
import { useParams, Link } from "react-router-dom";
import "./_deusDetalhe.scss";

const deuses = [
  {
    nome: "Tanathos",
    titulo: "Deus da Morte e das Maldições",
    descricaoLonga: `Tanathos é cultuado por necromantes e ceifadores de almas. Seus rituais envolvem oferendas noturnas, e seus templos são erguidos em cemitérios esquecidos. Ele rege os ciclos finais e maldições ancestrais.`,
    imagem: "/deus1.png",
    dominios: ["Morte", "Maldições"],
    simbolo: "Uma caveira envolta por correntes negras",
  },
  {
    nome: "Vitta",
    titulo: "Deusa da Vida e das Bençãos",
    descricaoLonga: `Vitta representa o sopro vital e a abundância. Suas sacerdotisas são conhecidas por curas milagrosas e bênçãos divinas. Seus altares são decorados com flores e água cristalina.`,
    imagem: "/deus2.png",
    dominios: ["Vida", "Bençãos"],
    simbolo: "Um lírio dourado sob um raio de sol",
  },
  {
    nome: "Arkhé",
    titulo: "Deus da Justiça e da Magia",
    descricaoLonga: `Arkhé é o equilíbrio entre conhecimento arcano e a aplicação justa da lei. Seus seguidores estudam magia em grandes bibliotecas e atuam como juízes em disputas sagradas.`,
    imagem: "/deus3.png",
    dominios: ["Justiça", "Magia"],
    simbolo: "Uma balança flutuando sobre um grimório",
  },
];

const DeusDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const deus = deuses[parseInt(id || "0")];

  if (!deus) return <div>Deus não encontrado</div>;

  return (
  <div className="deus-detalhe-container">
    <Link to="/deuses" className="voltar-fixo">← Voltar</Link>
    <img className="fundo-imagem" src={deus.imagem} alt={`Imagem de ${deus.nome}`} />
    <div className="painel-info">
      <h1>{deus.nome}</h1>
      <h2>{deus.titulo}</h2>
      <p className="descricao">{deus.descricaoLonga}</p>
      <p><strong>Domínios:</strong> {deus.dominios.join(", ")}</p>
      <p><strong>Símbolo:</strong> {deus.simbolo}</p>
    </div>
  </div>
);

};

export default DeusDetalhe;
