import React from "react";
import "./habilidades.css";
import "./responsive.css";

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
    <section className="container habilidades" id="habilidadesDiv">
      <div className="card">
        <div className="card-body habilidades-tecnologias">
          <div className="title-habilidades">
            <h2> HABILIDADES</h2>
          </div>
          <div className="contenido-habilidades">
            <div className="skill">
              <img src={a6} alt="imagen Javascript" />

              <p>JAVASCRIPT</p>
            </div>
            <div className="skill">
              <img src={a7} alt="imagen Css3" />

              <p>CSS3</p>
            </div>
            <div className="skill">
              <img src={a8} alt="imagen HTML" />

              <p>HTML</p>
            </div>
            <div className="skill">
              <img src={a1} alt="imagen Git" />
              <p>GIT</p>
            </div>
            <div className="skill">
              <img src={a2} alt="imagen nodejs" />
              <p>NODE JS</p>
            </div>
            <div className="skill">
              <img src={a3} alt="imagen reactjs" />

              <p>REACT JS</p>
            </div>
            <div className="skill">
              <img src={a4} alt="imagen Python" />

              <p>PYTHON</p>
            </div>
            <div className="skill">
              <img src={a5} alt="imagen Nodejs" />

              <p>NODE JS</p>
            </div>
            <div className="skill">
              <img src={a9} alt="imagen Electronjs" />
              <p>ELECTRON JS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
