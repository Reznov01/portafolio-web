import React from "react";
import "./proyectos.css";
import "./responsive.css";
import wave from "../../assets/img/portafolio/wave.svg";
import { Card } from "../proyectos/cards/Card";
import imgProyecto1 from "../../assets/img/portafolio/p1.png";
import imgProyecto2 from "../../assets/img/portafolio/p2.png";
import imgProyecto3 from "../../assets/img/portafolio/p3.png";
import imgProyecto4 from "../../assets/img/portafolio/p4.png";
export const Proyectos = () => {
  return (
    <section className="proyectosDiv">
      <img src={wave} alt="background" className="backgroundWave" />
      <div className="container " id="proyectosDiv">
        <div className="titleProyectos">
          <h2>Proyectos</h2>
        </div>
      </div>
      <div className="proyectosCards proyectos">
        <Card
          imagen={imgProyecto1}
          title="Echo con react"
          subtitle="Subtitle1"
          subtitle2="subtitle2"
        />
        <Card
          imagen={imgProyecto2}
          title="Echo con react"
          subtitle="subtitle"
        />
        <Card
          imagen={imgProyecto3}
          title="Echo con react"
          subtitle="subtitle"
        />
        <Card
          imagen={imgProyecto4}
          title="Echo con react"
          subtitle="subtitle"
        />
      </div>
    </section>
  );
};
