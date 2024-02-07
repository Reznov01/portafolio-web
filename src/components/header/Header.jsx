import React from "react";
import "./header.css";
import LinkedinImg from "../../assets/img/Linkedin.png";
import Github from "../../assets/img/github.png";
import Cv from "../../assets/img/resume.png";
import man from "../../assets/img/man2.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="container dp">
        <div className="content">
          <div className="presentation">
            <h1 className="letraColor title">
              Descubre mi mundo <span className="digital">digital</span>
            </h1>
            <p className="letraColor">
              <span className="name">Rafael Romero Molina</span> - Desarrollador
              Web Front-end
            </p>
            <ul className="lista-icons">
              <li>
                <a href="#">
                  <img src={LinkedinImg} alt="ling linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Github} alt="link github" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Cv} alt="link Cv" />
                </a>
              </li>
            </ul>
            <div className="botonDiv">
              <button className="button">
                <span className="button_lg">
                  <span className="button_sl"></span>
                  <span className="button_text">Descargar CV</span>
                </span>
              </button>
            </div>
          </div>
          <div className="man">
            <img src={man} alt="Imagen de hombre" />
          </div>
        </div>
      </div>
    </div>
  );
};
