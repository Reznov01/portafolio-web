import React from "react";
import "./habilidades.css";
import a1 from "../../assets/img/habilidades/a1.png";
import a2 from "../../assets/img/habilidades/a2.png";
import a3 from "../../assets/img/habilidades/a3.png";
import a4 from "../../assets/img/habilidades/a4.png";
import a5 from "../../assets/img/habilidades/a5.png";
import a6 from "../../assets/img/habilidades/a6.png";
import a7 from "../../assets/img/habilidades/a7.png";
import a8 from "../../assets/img/habilidades/a8.png";
import a9 from "../../assets/img/habilidades/a9.png";
export const Habilidades = () => {
  return (
    <section className="container habilidades">
      <div className="card">
        <div className="habilidades-tecnologias card-body">
          <div className="title-habilidades">
            <h2> HABILIDADES</h2>
          </div>
          <div className="contenido-habilidades">
            <div className="skill">
              <img src={a6} alt="imagen Javascript" />

              <text>JAVASCRIPT</text>
            </div>
            <div className="skill">
              <img src={a7} alt="imagen Css3" />

              <text>CSS3</text>
            </div>
            <div className="skill">
              <img src={a8} alt="imagen HTML" />

              <text>HTML</text>
            </div>
            <div className="skill">
              <img src={a1} alt="imagen Git" />
              <text>GIT</text>
            </div>
            <div className="skill">
              <img src={a2} alt="imagen nodejs" />
              <text>NODE JS</text>
            </div>
            <div className="skill">
              <img src={a3} alt="imagen reactjs" />

              <text>REACT JS</text>
            </div>
            <div className="skill">
              <img src={a4} alt="imagen Python" />

              <text>PYTHON</text>
            </div>
            <div className="skill">
              <img src={a5} alt="imagen Nodejs" />

              <text>NODE JS</text>
            </div>
            <div className="skill">
              <img src={a9} alt="imagen Electronjs" />
              <text>ELECTRON JS</text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
