import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaBookOpen, FaUsers, FaExclamationTriangle } from "react-icons/fa";
import "./_campanhas.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const campanhas = [
  {
    titulo: "HG: Primórdios",
    descricao:
      "Essa história é contada a muitas décadas atrás, grandes feitos sequer existiram, reinos ainda nem foram criados, somente a cobiça é o que prevalece sobre as terras pecaminosas desse mundo.",
    imagem: "/campanha1.png",
    historia:
      "Uma era antiga onde os reinos ainda não foram formados. Conflitos tribais e cobiça moldam o destino das terras amaldiçoadas.",
    personagens: [
      "Pervo, o Paladino",
      "Altair, o Artificer",
      "Zephyr, o Mago",
      "Verena, a Ranger",
      "Harvey, o Ladino",
      "Doran, o Caçador",
      "Mors, o corrompido",
    ],
    conflitos:
      "Tribos rivais batalham por território. Um artefato ancestral ameaça despertar horrores esquecidos nas profundezas da terra.",
  },
  {
    titulo: "HG: Sacrilégio",
    descricao:
      "'Aquele que profanas o sagrado, deve aceitar o peso do pecado eterno'.",
    imagem: "/campanha2.png",
    historia:
      "Sacrilégio gira em torno de um grupo que desafia os próprios deuses, enfrentando maldições e punições divinas.",
    personagens: [
      "Sed, o Paladino",
      "Kambami, o bruxo",
      "Yaris, o Artificer",
    ],
    conflitos:
      "Os personagens precisam lidar com perseguições divinas enquanto buscam redenção e poder proibido.",
  },
  {
    titulo: "HG: Contos",
    descricao: "Explorando o mundo de HG.",
    imagem: "/campanha3.png",
    historia:
      "Uma coletânea de histórias curtas que percorrem diferentes lugares e épocas do universo HG.",
    personagens: [
      "Milo, o Bardo Curioso",
      "Ivy, a Ladina Sombria",
      "Gareth, o Guardião Ancião",
    ],
    conflitos:
      "Cada conto traz novos desafios, de pequenas intrigas políticas a monstros lendários esquecidos.",
  },
];

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow left" onClick={onClick}>
      &lt;
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow right" onClick={onClick}>
      &gt;
    </div>
  );
};

const Campanhas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const detalheRef = useRef<HTMLDivElement | null>(null);

  const scrollToDetalhes = () => {
    if (detalheRef.current) {
      detalheRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const campanhaAtual = campanhas[currentIndex];

  return (
    <div className="campanhas-container">
      <Slider {...settings}>
        {campanhas.map((campanha, index) => (
          <div key={index} className="campanha-slide">
            <div
              className="campanha-background"
              style={{ backgroundImage: `url(${campanha.imagem})` }}
            >
              <div className="campanha-overlay">
                <h2>{campanha.titulo}</h2>
                <p>{campanha.descricao}</p>
                <div className="botoes">
                  <button className="detalhes" onClick={scrollToDetalhes}>
                    Detalhes
                  </button>
                  <button className="assistir">Assistir Agora</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="detalhes-campanha" ref={detalheRef}>
        <h2 className="titulo-campanha">{campanhaAtual.titulo}</h2>
        <div className="cards-container">
          <div className="card">
            <FaBookOpen className="icon" />
            <h3>História</h3>
            <p>{campanhaAtual.historia}</p>
          </div>
          <div className="card">
            <FaUsers className="icon" />
            <h3>Personagens</h3>
            <ul>
              {campanhaAtual.personagens.map((personagem, i) => (
                <li key={i}>{personagem}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <FaExclamationTriangle className="icon" />
            <h3>Conflitos</h3>
            <p>{campanhaAtual.conflitos}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campanhas;
