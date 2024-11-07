import React from "react";
import "./header.css";
import "./responsive.css";
import LinkedinImg from "../../assets/img/linkedin.png";
import Github from "../../assets/img/github.png";
import Cv from "../../assets/img/resume.png";
import man from "../../assets/img/man2.svg";

export const Header = () => {
  return (
    <div className="header " id="home">
      <div className="container dp">
        <div className="content">
          <div className="presentation">
            <h1 className="letraColor title">
              Descubre mi mundo <span className="digital">digital</span>
            </h1>
            <p className="letraColor subTitle">
              <span className="name">Rafael Romero Molina</span> - Desarrollador
              Web Front-end
            </p>
            <ul className="lista-icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/rafael-romero-molina/"
                  target="_blank"
                >
                  <img src={LinkedinImg} alt="link linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Reznov01" target="_blank">
                  <img src={Github} alt="link github" />
                </a>
              </li>
              <li>
                <a href="https://flowcv.com/resume/o8e3ouot8b" target="_blank">
                  <img src={Cv} alt="link Cv" />
                </a>
              </li>
            </ul>
            <div className="botonDiv">
              <a href="../../../public/cvPersonal.pdf" download>
                <button className="button">
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Descargar CV</span>
                  </span>
                </button>
              </a>
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
