import React from "react";
import "./habilidades.css";
import "./responsive.css";

import git from "../../assets/img/habilidades/a1.png";
import node from "../../assets/img/habilidades/a5.png";
import react from "../../assets/img/habilidades/a3.png";
import python from "../../assets/img/habilidades/a4.png";
import javascript from "../../assets/img/habilidades/a6.png";
import css3 from "../../assets/img/habilidades/a7.png";
import html from "../../assets/img/habilidades/a8.png";
import electron from "../../assets/img/habilidades/a9.png";
import tailwind from "../../assets/img/habilidades/tailwind.png";
export const Habilidades = () => {
  return (
    <section
      className="container md:mt-[200px] habilidades "
      id="habilidadesDiv"
    >
      <div className="card">
        <div className="card-body habilidades-tecnologias">
          <div className="title-habilidades my-8">
            <h2> Skills</h2>
          </div>
          <div className="contenido-habilidades">
            <div className="skill">
              <img src={javascript} alt="imagen Javascript" />

              <p>JAVASCRIPT</p>
            </div>
            <div className="skill">
              <img src={css3} alt="imagen Css3" />

              <p>CSS3</p>
            </div>
            <div className="skill">
              <img src={html} alt="imagen HTML" />

              <p>HTML</p>
            </div>
            <div className="skill">
              <img src={git} alt="imagen Git" />
              <p>GIT</p>
            </div>
            <div className="skill">
              <img src={node} alt="imagen nodejs" />
              <p>NODE JS</p>
            </div>
            <div className="skill">
              <img src={react} alt="imagen reactjs" />

              <p>REACT JS</p>
            </div>
            <div className="skill">
              <img src={python} alt="imagen Python" />

              <p>PYTHON</p>
            </div>

            <div className="skill">
              <img src={electron} alt="imagen Electronjs" />
              <p>ELECTRON JS</p>
            </div>
            <div className="skill">
              <img src={tailwind} alt="imagen Tailwind" />
              <p>TAILWIND CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
