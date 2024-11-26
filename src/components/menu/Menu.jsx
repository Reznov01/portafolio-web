import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import "./menu.css";

import "./navModalStyle.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" sticky top-0 z-50">
      <div className={` z-10 fixed ${isOpen ? "block" : "hidden"}`}>
        {/* Nav mobile toggle options */}
        <div className="navModal animate-fade-right animate-duration-200 animate-ease-out">
          <ul className="navMobile">
            <li className="nav-link">
              <button
                onClick={() => {
                  const element = document.getElementById("proyectosDiv");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                  navModal();
                }}
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
                  navModal();
                }}
              >
                Habilidades
              </button>
            </li>
            <li className="nav-link">
              <button
                onClick={() => {
                  const element = document.getElementById("experienciaDiv");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                  navModal();
                }}
              >
                Experiencia
              </button>
            </li>
          </ul>
        </div>
      </div>

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
                <li className="nav-link  ">
                  <button
                    onClick={() => {
                      const element = document.getElementById("proyectosDiv");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
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
                  >
                    Habilidades
                  </button>
                </li>
                <li className="nav-link">
                  <button
                    onClick={() => {
                      const element = document.getElementById("experienciaDiv");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
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
