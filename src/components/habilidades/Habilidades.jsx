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
import { motion } from "framer-motion";
export const Habilidades = () => {
  return (
    <section
      className="container habilidades h-[50vh] sm:h-[100vh] md:my-36 flex flex-col "
      id="habilidadesDiv"
    >
      <div className="w-screen min-h-[100px] sm:min-h-[200px]  flex justify-center items-center relative overflow-hidden ">
        <motion.div
          className="w-[33%] sm:flex-1  h-[80%] sm:h-[50%] bg-blue-400 z-10 rounded-sm"
          initial={{ y: 0 }}
          whileInView={{ y: "100%", transition: { delay: 0.5, duration: 0.6 } }}
        ></motion.div>
        <motion.div
          className="w-[33%] sm:flex-1  h-[80%] sm:h-[50%] bg-blue-400 z-10 rounded-sm"
          initial={{ y: 0 }}
          whileInView={{ y: "-90%", transition: { delay: 0.5, duration: 0.6 } }}
        ></motion.div>
        <motion.div
          className="w-[33%] sm:flex-1  h-[80%] sm:h-[50%] bg-blue-400 z-10 rounded-sm"
          initial={{ y: 0 }}
          whileInView={{ y: "100%", transition: { delay: 0.5, duration: 0.6 } }}
        ></motion.div>
        <h2 className="text-4xl sm:text-8xl font-medium absolute">
          {"<Skills />"}
        </h2>
      </div>

      <div className="bg-slate-800  p-5 md:p-2 mt-10 rounded-md text-white  shadow-[-16px_41px_32px_10px_#00000024]">
        <div className="card-body habilidades-tecnologias">
          <div className="contenido-habilidades w-screen sm:w-auto">
            <div className="skill ">
              <img src={javascript} alt="imagen Javascript" />

              <p>JAVASCRIPT</p>
            </div>
            <div className="skill ">
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
