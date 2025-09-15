import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FolderKanban, Code, User } from "lucide-react";
import "./menu.css";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import {
  MdClose,
  MdHome,
  MdPerson,
  MdWork,
  MdBuild,
  MdMiscellaneousServices,
  MdRateReview,
  MdContactMail,
} from "react-icons/md";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = [
    { text: "Inicio", icon: <MdHome size={24} />, targetId: "home" },
    {
      text: "Acerca de",
      icon: <MdPerson size={24} />,
      targetId: "certificadosDiv",
    },
    {
      text: "Portafolio",
      icon: <MdWork size={24} />,
      targetId: "proyectos",
    },
    {
      text: "Habilidades",
      icon: <MdBuild size={24} />,
      targetId: "habilidades",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navModal = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setIsOpen(false); // Close the mobile menu after clicking a link
    }
  };

  // Efecto para bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Bloquea el scroll
    } else {
      document.body.style.overflow = "unset"; // Restaura el scroll
    }

    return () => {
      document.body.style.overflow = "unset"; // Asegúrate de limpiar el estilo cuando se desmonte
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50">
      {/* Overlay semi-transparente */}
      <div
        className={`fixed inset-0 bg-[#3e3f3f63] transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={navModal}
      />
      {/* Menú lateral */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={navModal}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-gradient-to-br from-white via-gray-50 to-blue-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with close button */}
        <div className="relative p-6 border-b border-gray-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Navegación</h3>
              <p className="text-sm text-gray-500">Explora mi portafolio</p>
            </div>
            <button
              onClick={navModal}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 group"
            >
              <MdClose
                size={24}
                className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200"
              />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 p-6">
          <ul className="space-y-2">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className={`transform transition-all duration-300 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${0.1 + i * 0.05}s` : "0s",
                }}
              >
                <button
                  onClick={() => handleScrollToSection(link.targetId)}
                  className="flex w-full items-center gap-4 rounded-xl p-4 text-left font-medium text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-md hover:scale-105 active:scale-95 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-200">
                    {link.icon}
                  </div>
                  <span className="group-hover:text-gray-900 transition-colors duration-200">
                    {link.text}
                  </span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer with CV Download */}
        <div className="p-6 border-t border-gray-200/50">
          <a
            href="/ruta/a/tu/cv.pdf"
            download="NombreApellido_CV.pdf"
            className={`flex w-full items-center gap-4 rounded-xl p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 active:scale-95 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen
                ? `${0.1 + navLinks.length * 0.05}s`
                : "0s",
            }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
              <FaDownload size={20} />
            </div>
            <span>Descargar CV</span>
            <div className="ml-auto">
              <div className="w-2 h-2 rounded-full bg-white/60" />
            </div>
          </a>

          {/* Decorative element */}
          <div className="mt-4 flex justify-center">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-blue-300" />
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-transparent
          
        `}
      >
        <div
          className={`flex py-2 px-2  md:gap-10 lg:w-fit md:px-10 mx-auto transition-all duration-300 
          md:rounded-full ${isScrolled ? "bg-[#ecedee]" : "bg-[#f9fafb]"}`}
        >
          <div className={` flex justify-between items-center  w-full `}>
            <div className="w-full flex p-2 z-10 items-center justify-between lg:hidden">
              {/*Nombre mobile*/}
              <button
                className="uppercase font-medium"
                onClick={() => handleScrollToSection("home")}
              >
                Rafael Romero
              </button>

              <GiHamburgerMenu
                className={`burgerIconNav text-xl cursor-pointer ${
                  isScrolled ? "text-white" : "text-black"
                } }
                    
                  `}
                onClick={navModal}
                fill={"black"}
              />
            </div>
            <div className="enlaces hidden lg:block">
              <ul className="nav text-xl ">
                <li className="nav-link  mt-2 ">
                  <button
                    onClick={() => handleScrollToSection("proyectos")}
                    className={`btnHover text-black`}
                  >
                    Proyectos
                  </button>
                </li>
                <li className="nav-link mt-2">
                  <button
                    onClick={() => handleScrollToSection("habilidades")}
                    className={`btnHover text-black`}
                  >
                    Habilidades
                  </button>
                </li>
                <li className="nav-link mt-2">
                  <button
                    onClick={() => handleScrollToSection("certificadosDiv")}
                    className={`btnHover text-black`}
                  >
                    Sobre Mi
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex items-center ml-10">
              <a
                href="/cv.pdf"
                download
                className={`hidden lg:flex gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors no-underline
                       ${isScrolled ? "text-yellow-100" : "text-white"}`}
              >
                Descargar CV
                <MdOutlineFileDownload size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
