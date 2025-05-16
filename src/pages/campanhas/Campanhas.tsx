import React from "react";
import Slider from "react-slick";
import "./_campanhas.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const campanhas = [
  {
    titulo: "HG: Primórdios",
    descricao: "Essa história é contada a muitas décadas atrás, grandes feitos se quer existiram, reinos ainda nem foram criados, somente a cobiça é o que prevalece sobre as terras pecaminosas desse mundo.",
    imagem: "/campanha1.png",
  },
  {
    titulo: "HG: Sacrilégio",
    descricao: "'Aquele que profanas o sagrado, deve aceitar o peso do pecado eterno'.",
    imagem: "/campanha2.png",
  },
  {
    titulo: "HG: Contos",
    descricao: "Explorando o mundo de HG.",
    imagem: "/campanha3.png",
  },
];

// Botões personalizados
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return <div className="custom-arrow left" onClick={onClick}>&lt;</div>;
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return <div className="custom-arrow right" onClick={onClick}>&gt;</div>;
};

const Campanhas = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

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
                  <button className="detalhes">Detalhes</button>
                  <button className="jogar">Jogar Agora</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Campanhas;
