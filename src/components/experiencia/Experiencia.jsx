import React from "react";
import "./experiencia.css";
import "./responsive.css";
import CarouselCards from "../Carousel/CarouselCards";

export default function Experiencia() {
  const cardColors = ["#00a8ff", "#7f8fa6", "#2f3640"];
  const cards = [
    {
      institution: "Oracle alura",
      info: "Rafael Romero ha completado 6 formaciones con una carga de trabajo de 343 horas.",
      courses: [
        "Desarrollo Personal G4",
        "ONE Principiante en Programación G4",
        "ONE Front End G4",
        "ONE React G4",
        "ONE Emprendimiento G4",
        "ONE Business Agility G4",
      ],
    },
    // Agrega detalles para las otras tarjetas aquí
    {
      institution: "Otros",

      courses: [
        "Sololearn - React + Redux",
        "Sololearn - Responsive web design",
        "Sololearn - PHP",
        "Sololearn - Jquery",
        "Freecodecamp - JavaScript Algorithms and Data Structures",
      ],
    },
    {
      institution: "Google Activate",

      courses: ["Curso de introducción al desarrollo web: HTML y CSS"],
    },
  ];

  return (
    <div
      className="experienciaDiv mb-[50px] sm:mb-[300px] xl:mb-[200px]"
      id="experienciaDiv"
    >
      <div className="experiencia ">
        <div className="container">
          <h2>Hola 👋, soy Rafael Romero, Un gusto saludarte</h2>
          <p className="subTextoExperiencia">
            Un desarrollador web Front-End autodidacta. Mi enfoque se centra en
            transformar desafíos en oportunidades, reflejado en mi portafolio la
            fusión de creatividad y esfuerzo que define mi viaje en él
            desarrollo web.
          </p>
        </div>
      </div>
      <div className="carouselDivCertificados w-screen sm:-left-[100px] md:-left-[40px] 2xl:pt-[250px]">
        <CarouselCards cards={cards} cardColors={cardColors} />
      </div>
      <div className="container certificadosDiv">
        <div className="certificados">
          <div className="card  cardDiv ">
            <div className="card-body containerCardCertificados">
              <div className="certificadosContainer">
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

                    <div className="formaciones formacionesAlura">
                      <ul>
                        <li>Desarrollo Personal G4</li>
                        <li>ONE Principiante en Programación G4 </li>
                        <li>ONE Front End G4</li>
                        <li>ONE React G4</li>
                        <li>ONE Emprendimiento G4</li>
                        <li>ONE Business Agility G4</li>
                      </ul>
                    </div>
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
    </div>
  );
}
