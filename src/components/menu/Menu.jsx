import React from "react";
import Button from "react-bootstrap/Button";
import "./menu.css";

export const Menu = () => {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <h2>Rafael Conse</h2>
          <ul className="nav">
            <li className="nav-link">Proyectos</li>
            <li className="nav-link">habilidades</li>
            <li className="nav-link">Experiencia</li>
            <li className="nav-link">Sobre mi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
