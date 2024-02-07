import React from "react";
import "./experiencia.css";

export default function Experiencia() {
  return (
    <div className="experienciaDiv">
      <div className="experiencia">
        <div className="container">
          <h2>Hola 👋, soy Rafael Romero, Un gusto saludarte</h2>
          <p className="subTextoExperiencia">
            Un desarrollador web front-end autodidacta. Mi enfoque se centra en
            transformar desafíos en oportunidades, reflejando en mi portafolio
            la fusión de creatividad y esfuerzo que define mi viaje en el
            desarrollo web.
          </p>
        </div>
      </div>
      <div className="container certificadosDiv">
        <div className="certificados">
          <div className="card  ">
            <div className="card-body">
              <h2 className="tituloCertificados">certificados</h2>
              <div className="certificadoDivision activateC">
                <h2>
                  <span className="iconC">🎓 </span>Google activate
                </h2>
                <div className="certificadosActivateSeccion">
                  <p>Curso de introducción al desarrollo web: HTML y CSS</p>
                </div>
              </div>
              <div className="certificadoDivision aluraC">
                <h2>
                  <span className="iconC">🎓 </span>Oracle alura
                </h2>
                <div className="certificadosOracleSeccion">
                  <p>
                    Rafael Romero ha completado 6 formaciones con una carga de
                    trabajo estimada de 343 horas.
                  </p>

                  <p className="formaciones">
                    <ul>
                      <li>Desarrollo Personal G4</li>
                      <li>ONE Principiante en Programación G4 </li>
                      <li>ONE Front End G4</li>
                      <li>ONE React G4</li>
                      <li>ONE Emprendimiento G4</li>
                      <li>ONE Business Agility G4</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="certificadoDivision otroC">
                <h2>🎓 Otros</h2>
                <ul>
                  <li>Sololearn - React + Redux </li>
                  <li>Sololearn - Responsive web design</li>
                  <li>Sololearn - PHP</li>
                  <li>Sololearn - Jquery</li>
                  <li>
                    Freecodecamp - JavaScript Algorithms and Data Structures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
