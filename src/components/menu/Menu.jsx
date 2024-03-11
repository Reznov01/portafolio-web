import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import "./menu.css";
import "./responsive.css";
import "./navModalStyle.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className={`navModal ${isOpen ? "open" : ""}`}>
        <div className="navMobileMenu">
          <div className="enlacesMobile">
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
      </div>
      <div className="container-fluid menuMobile">
        <nav className="navbar">
          <GiHamburgerMenu className="burgerIconNav" onClick={navModal} />
          <h1>Rafael Romero</h1>
        </nav>
      </div>
      <div className="container menuWeb  ">
        <div className="padreNav">
          <nav className="navbar ">
            <div className="nameTitle">
              <button
                onClick={() => {
                  const element = document.getElementById("home");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Rafael Conse
              </button>
            </div>
            <div className="enlaces">
              <ul className="nav">
                <li className="nav-link">
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
                    Experiencia
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
