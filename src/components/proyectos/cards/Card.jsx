import React from "react";
import "./card.css";
import "./responsive.css";
export const Card = (props) => {
  const { imagen, title, subtitle, subtitle2 } = props;
  return (
    <div className="cardsDiv">
      <div className="card bg-dark text-white card-hover">
        <img src={imagen} className="card-img" alt="..." />
        <div className="card-img-overlay card-text-hover-show">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subtitle}</p>
          <p className="card-text">{subtitle2}</p>
        </div>
      </div>
    </div>
  );
};
