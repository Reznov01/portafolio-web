import React from "react";
import "./proyectos.css";
import "./responsive.css";
import wave from "../../assets/img/portafolio/wave.svg";
import { Card } from "../proyectos/cards/Card";
import imgProyecto1 from "../../assets/img/portafolio/desktop.png";
import imgProyecto1back from "../../assets/img/portafolio/mobile.png";
import imgProyecto2 from "../../assets/img/portafolio/mentor1.png";
import imgProyecto2back from "../../assets/img/portafolio/mentor2.png";
import imgProyecto3 from "../../assets/img/portafolio/p3.png";
import imgProyecto4 from "../../assets/img/portafolio/p4.png";
import proximamente from "../../assets/img/portafolio/proximamente.png";
import git from "../../assets/img/habilidades/a1.png";
import node from "../../assets/img/habilidades/a5.png";
import react from "../../assets/img/habilidades/a3.png";
import python from "../../assets/img/habilidades/a4.png";
import javascript from "../../assets/img/habilidades/a6.png";
import css3 from "../../assets/img/habilidades/a7.png";
import html from "../../assets/img/habilidades/a8.png";
import electron from "../../assets/img/habilidades/a9.png";
import tailwind from "../../assets/img/habilidades/tailwind.png";
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
          imagenback={imgProyecto1back}
          title="App Hunter"
          subtitle='Herramienta para windows "busqueda de archivos" '
          url="https://apphunter-conselab.netlify.app/"
          urlGithub="https://github.com/Reznov01/portafolio-web"
          infoBack="Busca los archivos de su computadora, imagenes pdf y videos. para tener su informacion centralizada y de facil acceso"
          habilidad_1={html}
          habilidad_2={css3}
          habilidad_3={javascript}
          habilidad_4={node}
          habilidad_5={electron}
          habilidad_6={python}
        />
        <Card
          imagen={imgProyecto2}
          imagenback={imgProyecto2back}
          title="Estilizado tailwind css"
          colorTextTitle="text-black"
          colorSubTitle="text-black"
          subtitle="Componente para suscripción de newslater"
          infoBack="Desafio de practica de Front Mentor."
          url="https://front-mentor-05.netlify.app/"
          urlGithub="https://github.com/Reznov01/Newslatter-component"
          habilidad_1={html}
          habilidad_2={tailwind}
          habilidad_3={javascript}
        />
        <Card
          imagen={imgProyecto3}
          imagenback={proximamente}
          url="#"
          title="Echo con react"
          subtitle="panle de control admin."
          infoBack="Proximamente"
        />
        <Card
          imagen={imgProyecto4}
          imagenback={proximamente}
          url="#"
          title="Echo con react"
          subtitle="slider informativo"
          infoBack="Proximamente"
        />
      </div>
    </section>
  );
};
