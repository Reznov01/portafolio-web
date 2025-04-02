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
      className="container my-20 h-[50vh]  md:my-36 flex flex-col "
      id="habilidadesDiv"
    >
      <div className="text-center w-full h-30">
        <h2 className="text-4xl sm:text-8xl font-medium ">Skills</h2>
      </div>

      <div className="bg-slate-800 mx-auto w-[95%] px-2 py-4 md:p-2 mt-10 rounded-md text-white  shadow-[-16px_41px_32px_10px_#00000024]">
        <div className="card-body habilidades-tecnologias">
          <div className="flex flex-wrap  sm:w-auto gap-4 justify-center w-full">
            <div className="flex flex-col items-center gap-2">
              <img
                src={javascript}
                alt="imagen Javascript"
                className="w-14 h-14 sm:w-28 sm:h-28 xl:w-32 xl:h-32 2xl:w-42 2xl:h-42"
              />
              <p className="text-xs sm:text-lg  text-center">JAVASCRIPT</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={css3}
                alt="imagen Css3"
                className="w-14 h-14 sm:w-28 sm:h-28 xl:w-32 xl:h-32 2xl:w-42 2xl:h-42"
              />
              <p className="text-xs sm:text-lg  text-center">CSS3</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={html}
                alt="imagen HTML"
                className="w-14 h-14 sm:w-28 sm:h-28 xl:w-32 xl:h-32 2xl:w-42 2xl:h-42"
              />
              <p className="text-xs sm:text-lg  text-center">HTML</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={git}
                alt="imagen Git"
                className="w-14 h-14 sm:w-28 sm:h-28 xl:w-32 xl:h-32 2xl:w-42 2xl:h-42"
              />
              <p className="text-xs sm:text-lg  text-center">GIT</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={node}
                alt="imagen Nodejs"
                className="w-14 h-14 sm:w-28 sm:h-28 xl:w-32 xl:h-32 2xl:w-42 2xl:h-42"
              />
              <p className="text-xs sm:text-lg  text-center">NODE JS</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={react}
                alt="imagen Reactjs"
                className="w-14 h-14 sm:w-28 sm:h-28 xl:w-32 xl:h-32 2xl:w-42 2xl:h-42"
              />
              <p className="text-xs sm:text-lg  text-center">REACT JS</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={python}
                alt="imagen Python"
                className="w-14 h-14 sm:w-28 sm:h-28 xl:w-32 xl:h-32 2xl:w-42 2xl:h-42"
              />
              <p className="text-xs sm:text-lg  text-center">PYTHON</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={electron}
                alt="imagen Electronjs"
                className="w-14 h-14 sm:w-28 sm:h-28 xl:w-32 xl:h-32 2xl:w-42 2xl:h-42"
              />
              <p className="text-xs sm:text-lg  text-center">ELECTRON JS</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={tailwind}
                alt="imagen Tailwind"
                className="w-14 h-14 sm:w-28 sm:h-28 xl:w-32 xl:h-32 2xl:w-42 2xl:h-42"
              />
              <p className="text-xs sm:text-lg  text-center">TAILWIND CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
