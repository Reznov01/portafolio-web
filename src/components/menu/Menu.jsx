import React from "react";
import Button from "react-bootstrap/Button";
import "./menu.css";

export const Menu = () => {
  return (
    <header>
      <div className="container  ">
        <div className="padreNav">
          <nav className="navbar ">
            <div className="nameTitle">
              <h2>Rafael Conse</h2>
            </div>
            <div className="enlaces">
              <ul className="nav">
                <li className="nav-link">Proyectos</li>
                <li className="nav-link">habilidades</li>
                <li className="nav-link">Experiencia</li>
                <li className="nav-link">Sobre mi</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
