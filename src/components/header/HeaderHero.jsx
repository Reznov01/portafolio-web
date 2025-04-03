import avatar from "../../assets/img/avatar.png";
import LinkedinImg from "../../assets/img/linkedin.png";
import Github from "../../assets/img/github.png";
import Cv from "../../assets/img/resume.png";
import { motion } from "framer-motion";
import "./header.css";

export const HeaderHero = () => {
  return (
    <header
      className="header  animation min-h-[852px]  flex flex-col lg:flex-row relative z-0 overflow-hidden "
      id="headerHero"
    >
      <div className="w-full min-h-[220px] lg:w-[20%] xl:w-[30%] lg:h-full bg-[#09c4f6]"></div>

      <div
        className=" w-full h-screen lg:w-[80%] xl:w-[70%] lg:h-screen bg-[#2f3640] xl:pr-20  content justify-center lg:justify-end lg:pr-5 2xl:pr-0
      2xl:justify-center mx-auto  "
      >
        <div className="presentation h-[450px] sm:h-[550px] lg:h-[800px] text-center mt-[250px] text-sm  2xl:pl-28 ">
        <div className="w-[95%] sm:w-full  ">
          <h1 className="letraColor title text-[30px] sm:text-5xl lg:text-4xl 2xl:text-5xl ">
            Descubre mi mundo <span className="digital">digital</span>
          </h1>
        <p className="text-sm sm:text-xl text-yellow-400 mt-3">
            {" "}
            <span className="text-[#00a8ff] text-[16px] sm:text-xl">
              Rafael Romero Molina
            </span>{" "}
            - Desarrollador Web Front-End
          </p>
        </div>
          <ul className="flex flex-row justify-center gap-12 mr-4 my-5 sm:mr-[4%]  ">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="https://www.linkedin.com/in/rafael-romero-molina/"
                target="_blank"
              >
                <img
                  src={LinkedinImg}
                  alt="link linkedin"
                  title="Ir a perfil de linkedin"
                  className="w-[33px] h-[33px] md:w-[48px] md:h-[48px]  "
                />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="https://github.com/Reznov01" target="_blank">
                <img
                  src={Github}
                  alt="link github"
                  title="Ir a perfil de Github"
                  className="w-[33px] h-[33px]  md:w-[48px] md:h-[48px]"
                />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href="https://flowcv.com/resume/o8e3ouot8b" target="_blank">
                <img
                  src={Cv}
                  alt="link Cv"
                  title="Ver Online"
                  className="w-[33px] h-[33px]  md:w-[48px] md:h-[48px]"
                />
              </a>
            </motion.li>
          </ul>
          <div className="botonDiv my-16 ">
            <a href="../../../public/cvPersonal.pdf" download>
              <button className="button">
                <span className="button_lg">
                  <span className="button_sl"></span>
                  <span className="button_text">Descargar CV</span>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Imagen en el medio */}
      <div className="absolute  top-[25%] left-[50%] lg:top-[40%] lg:left-[20%] xl:left-[31%] transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={avatar}
          alt="Imagen Avatar"
          className="w-[300px] h-[360px] md:w-[250px] lg:w-[350px] lg:h-[400px] shadow-lg rounded-lg"
        />
      </div>
    </header>
  );
};
