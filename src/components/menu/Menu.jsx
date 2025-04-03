import React, { useState,useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FolderKanban, Code, User } from "lucide-react";
import "./menu.css";
import { motion } from "framer-motion";


export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navModal = () => {
    setIsOpen(!isOpen);
  };

  // Efecto para bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Bloquea el scroll
    } else {
      document.body.style.overflow = 'unset'; // Restaura el scroll
    }
  
    return () => {
      document.body.style.overflow = 'unset'; // Asegúrate de limpiar el estilo cuando se desmonte
    };
  }, [isOpen]);
 
  return (
    <nav className=" sticky top-0 z-50">
      {/* Overlay semi-transparente */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={navModal}
      />
      {/* Menú lateral */}
      <motion.div
  initial={{ x: "100%" }}
  animate={{ x: isOpen ? 0 : "100%" }}
  transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }} // retraso para el menú lateral
  className="fixed top-0 right-0 h-full w-56 bg-[#15ccff] overflow-hidden"
>
  <div className="h-full flex flex-col mt-16">
    <ul className="text-xl text-black -ml-8">
      {/* Animación para el primer enlace */}
      <motion.li
        className="my-5"
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => {
            const element = document.getElementById("proyectosDiv");
            element?.scrollIntoView({
              behavior: "smooth",
            });
            navModal();
          }}
          className="flex items-center gap-2 text-black font-bold text-xl w-full px-4 py-2 transition-all duration-300 hover:bg-black/10 active:bg-black/20 rounded-lg"
        >
          <FolderKanban size={28} />
          Proyectos
        </button>
      </motion.li>

      {/* Animación para el segundo enlace */}
      <motion.li
        className="my-5"
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }} // pequeño retraso para el segundo enlace
      >
        <button
          onClick={() => {
            const element = document.getElementById("habilidadesDiv");
            element?.scrollIntoView({
              behavior: "smooth",
            });
            navModal();
          }}
          className="flex items-center gap-2 text-black font-bold text-xl w-full px-4 py-2 transition-all duration-300 hover:bg-black/10 active:bg-black/20 rounded-lg"
        >
          <Code size={28} />
          Habilidades
        </button>
      </motion.li>

      {/* Animación para el tercer enlace */}
      <motion.li
        className="my-5"
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }} // pequeño retraso para el tercer enlace
      >
        <button
          onClick={() => {
            const element = document.getElementById("certificadosDiv");
            element?.scrollIntoView({
              behavior: "smooth",
            });
            navModal();
          }}
          className="flex items-center gap-2 text-black font-bold text-xl w-full px-4 py-2 transition-all duration-300 hover:bg-black/10 active:bg-black/20 rounded-lg"
        >
          <User size={28} />
          Sobre Mi
        </button>
      </motion.li>
    </ul>
  </div>
</motion.div>

      <div className="container-fluid    bg-[#2f3640] ">
        <div className="padreNav ">
          <div className="text-teal-50 flex  p-1 sm:p-2 justify-between  lg:mx-12 2xl:mx-28">
            <button
              className="hidden lg:block text-xl uppercase font-medium "
              onClick={() => {
                const element = document.getElementById("headerHero");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Rafael Romero
            </button>
            <div className="w-full flex p-2 z-10 items-center justify-between lg:hidden">
              <button
                className="uppercase font-medium"
                onClick={() => {
                  const element = document.getElementById("headerHero");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Rafael Romero
              </button>

              <GiHamburgerMenu
                className="burgerIconNav text-xl"
                onClick={navModal}
              />
            </div>
            <div className="enlaces hidden lg:block">
              <ul className="nav text-xl">
                <li className="nav-link   ">
                  <button
                    onClick={() => {
                      const element = document.getElementById("proyectosDiv");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="btnHover"
                  >
                    Proyectos
                  </button>
                </li>
                <li className="nav-link">
                  <button
                    onClick={() => {
                      const element = document.getElementById("habilidadesDiv");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="btnHover"
                  >
                    Habilidades
                  </button>
                </li>
                <li className="nav-link">
                  <button
                    onClick={() => {
                      const element = document.getElementById("certificadosDiv");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="btnHover"
                  >
                    Sobre Mi
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
