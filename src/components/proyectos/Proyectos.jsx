import React from "react";
import "./proyectos.css";
import "./responsive.css";
import wave from "../../assets/img/portafolio/wave.svg";
import { Card } from "../proyectos/cards/Card";
import imgProyecto1 from "../../assets/img/portafolio/desktop.png";
import imgProyecto1back from "../../assets/img/portafolio/mobile.png";
import imgProyecto2 from "../../assets/img/portafolio/mentor1.png";
import imgProyecto2back from "../../assets/img/portafolio/mentor2.png";
import imgProyecto3 from "../../assets/img/portafolio/proyectoInformatica.png";
import imgProyecto3back from "../../assets/img/portafolio/proyectoInformaticaReverso.png";
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
    <section className="proyectosDiv min-h-[100%]  sm:pb-20">
      <img src={wave} alt="background" className="backgroundWave " />

      <div className="container md:pb-20 xl:-mb-40" id="proyectosDiv">
        <div className="titleProyectos">
          <h2>Proyectos</h2>
        </div>
      </div>
      <div className="proyectosCards proyectos md:-mb-28 ">
        <div className="w-[96%] z-1 rounded-2xl xl:h-[500px] bg-slate-800  flex  flex-wrap sm:mt-20 lg:mt-32">
          <div className="xl:w-2/5 flex items-center justify-center h-[300px] sm:mb-24 md:mb-36 lg:mb-[250px] xl:h-full ">
            <img
              src={imgProyecto3}
              alt="imagen de proyecto "
              className="object-cover w-full xl:w-[85%] xl:h-[90%] xl:object-fill   2xl:object-cover 2xl:w-[90%] rounded-md 2xl:h-[90%]"
            />
          </div>
          <div className="w-[360px] sm:w-full xl:w-3/5 h-full text-white xl:pt-5">
            <div>
              <h2 className="text-center">Informatica Romero</h2>
            </div>
            <div className="w-[90%] text-sm  mt-10 mx-auto sm:text-lg 2xl:w-[90ch] xl:text-lg">
              <p>
                Aplicacion web para empresa del sector IT especilizada en el
                mantenimieto y reparacion de equipos informaticos
              </p>
              <p>
                <span className="text-blue-300 font-bold">
                  El principal reto de este proyecto fue
                </span>
                : Hacer un panel de administracion donde pueda el admin, crear y
                modificar articulos para el blog, y ademas pueda hacer un CRUD
                de los productos de la tienda
              </p>
              <p>
                El SEO de la pagina es sumamente importante, aplique practicas
                de semantica y Accesibilidad a si como un diseño tatalmente
                responsivo para todos los dispositivos de usuarios
              </p>
            </div>
            <div className="px-3 sm:ml-3 xl:ml-5 2xl:ml-24 2xl:mt-10">
              <h3>tecnologias</h3>
            </div>
            <div className="my-4 xl:my-0  px-3  gap-4  h-10 flex sm:ml-3  xl:ml-5 xl:mt-5 2xl:ml-24">
              <img
                src={html}
                alt="imagen de html"
                className="w-[15px] h-[30px] sm:w-[25px] xl:w-[45px] xl:h-[40px]"
              />
              <img
                src={css3}
                alt="imagen de css3"
                className="w-[15px] h-[30px] sm:w-[25px] xl:w-[45px] xl:h-[40px]"
              />
              <img
                src={tailwind}
                alt="imagen de tailwindcss"
                className="w-[15px] h-[30px] sm:w-[25px] xl:w-[45px] xl:h-[40px]"
              />
              <img
                src={react}
                alt="imagen de react js"
                className="w-[15px] h-[30px] sm:w-[25px] xl:w-[45px] xl:h-[40px]"
              />
              <img
                src={node}
                alt="imagen de node js"
                className="w-[15px] h-[30px] sm:w-[25px] xl:w-[45px] xl:h-[40px]"
              />
              <a
                href="https://informaticaromero.com/"
                className="no-underline text-inherit"
                target="_blanck"
              >
                <button className="btnFirstCard  xl:ml-[150px] 2xl:ml-[380px] text-[12px] w-[130px] sm:w-[150px] sm:text-[16px] sm:ml-[150px] sm:p-[16px] p-3 h-5">
                  Ver sitio web
                  <div class="arrow-wrapper hidden sm:block">
                    <div class="arrow hidden sm:block"></div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
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
          imagenback={imgProyecto3back}
          url="https://informaticaromero.netlify.app/"
          title="Echo con react y Tailwind css"
          subtitle="aplicacion web para empresa de mantenimiento informatico"
          infoBack="Solución Web para Empresa de IT
Creé una aplicación responsive que permite a los clientes solicitar mantenimiento y obtener soporte técnico de manera rápida y eficiente."
          habilidad_1={react}
          habilidad_2={tailwind}
        />
      </div>
    </section>
  );
};
