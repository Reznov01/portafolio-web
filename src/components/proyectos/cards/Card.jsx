import React, { useState } from "react";
import "./card.css";
import "./responsive.css";

export const Card = (props) => {
  const {
    id,
    imagen,
    title,
    subtitle,
    colorTextTitle,
    colorSubTitle,
    handleProyects,
  } = props;

  return (
    <div className={`cardsDiv z-[2] `}>
      <div className="card bg-dark text-white card-hover">
        <div className="front" onClick={() => handleProyects(id)}>
          <img src={imagen} className="card-img" alt="..." />
          <div className="card-img-overlay card-text-hover-show">
            <h5 className={`card-title " ${colorTextTitle}`}>{title}</h5>
            <p className={`card-text ${colorSubTitle}`}>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
