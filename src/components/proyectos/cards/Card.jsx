import React, { useState } from "react";
import "./card.css";
import "./responsive.css";
import { FaArrowLeft } from "react-icons/fa";

export const Card = (props) => {
  const {
    imagen,
    title,
    subtitle,
    url,
    infoBack,
    habilidad_1,
    habilidad_2,
    habilidad_3,
    habilidad_4,
    habilidad_5,
    habilidad_6,
  } = props;
  const [flipped, setFlipped] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleCard = () => {
    setFlipped(!flipped);
    setIsClicked(!isClicked);
  };

  return (
    <div className={`cardsDiv ${flipped ? "flipped" : ""}`}>
      <div className="card bg-dark text-white card-hover">
        <div className="front">
          <img src={imagen} className="card-img" alt="..." />
          <div className="card-img-overlay card-text-hover-show">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{subtitle}</p>
            <div className="buttons">
              <button className="btn btn-info" onClick={handleCard}>
                Mas...
              </button>
              <a href={url} target="_blank">
                <button className="btn btn-success">Ir a proyecto</button>
              </a>
            </div>
          </div>
        </div>
        <div className="back">
          <FaArrowLeft className="iconArrowCard" onClick={handleCard} />
          <div className={`"hover-show-back ${isClicked ? "show" : ""}`}>
            <div className="contentInfo">
              <p className="infoBack">{infoBack}</p>
            </div>
            <div className="tecnologiasProyecto">
              <h4>Tecnologias usadas</h4>
              <ul>
                {habilidad_1 && (
                  <li>
                    <img src={habilidad_1} alt="imagen tecnologia usada" />
                  </li>
                )}
                {habilidad_2 && (
                  <li>
                    <img src={habilidad_2} alt="imagen tecnologia usada" />
                  </li>
                )}
                {habilidad_3 && (
                  <li>
                    <img src={habilidad_3} alt="imagen tecnologia usada" />
                  </li>
                )}
                {habilidad_4 && (
                  <li>
                    <img src={habilidad_4} alt="imagen tecnologia usada" />
                  </li>
                )}
                {habilidad_5 && (
                  <li>
                    <img src={habilidad_5} alt="imagen tecnologia usada" />
                  </li>
                )}
                {habilidad_6 && (
                  <li>
                    <img src={habilidad_6} alt="imagen tecnologia usada" />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
