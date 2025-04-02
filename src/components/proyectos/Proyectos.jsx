import { useState, useEffect } from "react";
import "./proyectos.css";
import "./responsive.css";
import wave from "../../assets/img/portafolio/wave.svg";
import { Card } from "../proyectos/cards/Card";
import imgProyecto1 from "../../assets/img/portafolio/searchTool.png";
import cardModalAppHunter from "../../assets/img/portafolio/appHunter.png";

import imgProyecto2 from "../../assets/img/portafolio/proyectoDotDager.png";

import imgProyecto3 from "../../assets/img/portafolio/proyectoInformatica.png";

import git from "../../assets/img/habilidades/a1.png";
import node from "../../assets/img/habilidades/a5.png";
import react from "../../assets/img/habilidades/a3.png";
import python from "../../assets/img/habilidades/a4.png";
import javascript from "../../assets/img/habilidades/a6.png";
import css3 from "../../assets/img/habilidades/a7.png";
import html from "../../assets/img/habilidades/a8.png";
import electron from "../../assets/img/habilidades/a9.png";
import tailwind from "../../assets/img/habilidades/tailwind.png";
import CardModal from "./modal/CardModal";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

export const Proyectos = () => {
  const [showInfoProyect, setShowInfoProyect] = useState(false);
  const [proyectId, setProyectId] = useState(null);

  useEffect(() => {
    // Agregar o eliminar la clase según el estado del modal
    if (showInfoProyect) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Limpiar la clase al desmontar el componente
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showInfoProyect]);

  const handleProyects = (e) => {
    setProyectId(e);
    setShowInfoProyect(!showInfoProyect);
    handleScroll();
  };

  const renderContent = () => {
    switch (proyectId) {
      case 1:
        return (
          <CardModal
            url={"https://apphunter-conselab.netlify.app/"}
            img={cardModalAppHunter}
            tools={[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "ELECTRON JS",
              "NODE JS",
              "PYTHON",
            ]}
            info="Aplicación web Y aplicación .exe para plataforma Windows"
            challange="En este proyecto busqué el combinar diferentes tecnologías y fue un reto el usar Python y Node js para lograr la comunicación con las apis de Windows"
            solutions="Esta app soluciona el buscar todos los archivos PDF, JPG, y Word y los almacena en una sola carpeta con los distintos archivos por separado en carpetas"
          />
        );

      case 2:
        return (
          <CardModal
            url={"https://dot-dager-mocha.vercel.app/"}
            img={imgProyecto2}
            tools={["REACT JS", "TAILWIND CSS"]}
            info="Landing Page para influencer DotDager"
            challange="DotDager lanzó un reto de crear una SPA (Single Page Aplication) en solo 2 días sin olvidar el diseño responsivo. El principal reto fue el tiempo
             Y el integrar un juego que le gusta dentro de la misma página."
            solutions="Con esta página se espera tener más alcance digital, con un estilo divertido y fresco."
          />
        );

      case 3:
        return (
          <CardModal
            url={"https://www.informaticaromero.com"}
            img={imgProyecto3}
            tools={[
              "HTML",
              "CSS",
              "REACT JS",
              "TAILWIND CSS",
              "NODE JS",
              "MYSQL",
            ]}
            info="Aplicación web para empresa del sector IT especializada en el mantenimiento y reparación de equipos informáticos"
            challange="El principal reto de este proyecto fue: Hacer un panel de administración donde pueda el administrador crear y modificar artículos para el blog, y además pueda hacer un CRUD de los productos de la tienda"
            solutions="Esta app web ayudó a aumentar las ventas y el alcance de la marca, haciendo la diferencia entre la competencia al tener presencia en el mercado online y poder atender solicitudes las 24 h."
          />
        );

      default:
        return null; // Si no coincide, no muestra nada.
    }
  };

  console.log(proyectId);
  return (
    <section className="proyectosDiv min-h-[100%]  sm:pb-20 overflow-hidden ">
      <img src={wave} alt="background" className="backgroundWave " />

      <div className="container md:pb-20 xl:-mb-40" id="proyectosDiv">
        <div className="titleProyectos">
          <h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Proyectos
          </h2>
        </div>
      </div>
      <div className="proyectosCards proyectos md:-mb-28 ">
        <motion.div
          className="w-[96%] z-1 rounded-2xl xl:h-[500px] bg-slate-800  flex  flex-wrap sm:mt-20 lg:mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        >
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
                Aplicación web para empresa del sector IT especializada en el
                mantenimiento y reparación de equipos informáticos
              </p>
              <p>
                <span className="text-blue-300 font-bold">
                  El principal reto de este proyecto fue
                </span>
                : Hacer un panel de administración donde pueda el administrador
                crear y modificar artículos para el blog, y además pueda hacer
                un CRUD de los productos de la tienda
              </p>
              <p>
                El SEO de la página es sumamente importante, apliqué prácticas
                De semántica y accesibilidad a sí como un diseño totalmente
                Responsivo para todos los dispositivos de usuarios
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
                  <div className="arrow-wrapper hidden sm:block">
                    <div className="arrow hidden sm:block"></div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </motion.div>
    <div className="z-10 gap-3 flex flex-col xl:flex-row flex-wrap">

        <motion.div
          initial={{ x: "-90%", opacity: 0 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        >
          <Card
            id={1}
            imagen={imgProyecto1}
            title="App Hunter"
            subtitle='Herramienta para windows "busqueda de archivos" '
            url="https://apphunter-conselab.netlify.app/"
            handleProyects={handleProyects}
          />
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <Card
            id={2}
            imagen={imgProyecto2}
            title="Estilizado tailwind css"
            colorTextTitle="text-black"
            colorSubTitle="text-black"
            subtitle="Componente para suscripción de newsletter"
            url="https://front-mentor-05.netlify.app/"
            handleProyects={handleProyects}
          />
        </motion.div>
        <motion.div
          initial={{ x: "90%", opacity: 0 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        >
          <Card
            id={3}
            imagen={imgProyecto3}
            url="https://informaticaromero.com/"
            title="Informatica Romero"
            subtitle="Aplicación web para empresa de mantenimiento informático"
            habilidad_1={react}
            habilidad_2={tailwind}
            handleProyects={handleProyects}
          />
        </motion.div>
    </div>
      </div>

      <div
        onClick={(e) => {
          // Verifica que el clic fue en el contenedor principal, no en el contenido interno
          if (e.target === e.currentTarget) {
            setShowInfoProyect(false);
          }
        }}
        className={`${
          showInfoProyect
            ? "fixed  inset-0 bg-[#000000e7]  flex items-center justify-center z-50"
            : "hidden"
        }`}
      >
        <div className="bg-[#0f0f10] w-11/12 h-[90vh] max-w-4xl p-6 rounded-lg shadow-lg relative border-x-2 border-x-gray-500 mt-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full animate-fade-down animate-duration-300 ">
          {/* Botón para cerrar el modal */}

          <button
            type="button"
            onClick={() => setShowInfoProyect(false)}
            className="sticky top-1 left-[98%]  "
          >
            <MdClose className="text-red-500 font-bold text-2xl hover:scale-125 transition-all " />
          </button>

          {renderContent()}
        </div>
      </div>
    </section>
  );
};
