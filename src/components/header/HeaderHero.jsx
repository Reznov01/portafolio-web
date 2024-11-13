import avatar from "../../assets/img/avatar.png";
import LinkedinImg from "../../assets/img/linkedin.png";
import Github from "../../assets/img/github.png";
import Cv from "../../assets/img/resume.png";
import "./header.css";

export const HeaderHero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Sección Izquierda */}
      <div className="w-full h-[220px] lg:w-[20%] xl:w-[30%] lg:h-screen bg-[#09c4f6]"></div>

      {/* Sección Derecha */}
      <div
        className=" w-full h-full lg:w-[80%] xl:w-[70%] lg:h-screen bg-[#2f3640] content justify-center lg:justify-end lg:pr-5 2xl:pr-0
      2xl:justify-center "
      >
        <div className="presentation h-[450px] lg:h-[800px] text-center mt-[250px] ">
          <h1 className="letraColor title">
            Descubre mi mundo <span className="digital">digital</span>
          </h1>
          <p className="letraColor subTitle">
            <span className="name">Rafael Romero Molina</span> - Desarrollador
            Web Front-end
          </p>
          <ul className="flex flex-row justify-center gap-12 mr-4 my-5 sm:mr-[4%]  ">
            <li>
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
            </li>
            <li>
              <a href="https://github.com/Reznov01" target="_blank">
                <img
                  src={Github}
                  alt="link github"
                  title="Ir a perfil de Github"
                  className="w-[33px] h-[33px]  md:w-[48px] md:h-[48px]"
                />
              </a>
            </li>
            <li>
              <a href="https://flowcv.com/resume/o8e3ouot8b" target="_blank">
                <img
                  src={Cv}
                  alt="link Cv"
                  title="Ver Online"
                  className="w-[33px] h-[33px]  md:w-[48px] md:h-[48px]"
                />
              </a>
            </li>
          </ul>
          <div className="botonDiv mt-16 ">
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
    </div>
  );
};
