import { useState, useEffect } from "react";
import "./proyectos.css";
import "./responsive.css";

import { Card } from "../proyectos/cards/Card";
import imgSearch from "../../assets/img/portafolio/searchTool.png";
import cardModalAppHunter from "../../assets/img/portafolio/appHunter.png";
import imgDotDager from "../../assets/img/portafolio/proyectoDotDager.png";
import imgInformatica from "../../assets/img/portafolio/proyectoInformatica.png";
import imgSeguridad from "../../assets/img/portafolio/seguridad.webp";
import imgSospantalla from "../../assets/img/portafolio/sospantalla.webp";
import imgProximamente from "../../assets/img/portafolio/proxi.webp";
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
import { motion } from "motion/react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiElectron } from "react-icons/si";

export const Proyectos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "App Hunter",
      subtitle: "Herramienta para Windows - búsqueda de archivos",
      image: imgSearch,
      url: "https://apphunter-conselab.netlify.app/",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Electron JS",
        "Node JS",
        "Python",
      ],
      description: "Aplicación web y aplicación .exe para plataforma Windows",
      challenge:
        "En este proyecto busqué combinar diferentes tecnologías y fue un reto usar Python y Node.js para lograr la comunicación con las APIs de Windows",
      solution:
        "Esta app soluciona el buscar todos los archivos PDF, JPG, y Word y los almacena en una sola carpeta con los distintos archivos por separado en carpetas",
      featured: false,
    },
    {
      id: 2,
      title: "Dot Dager - Reto 24h",
      subtitle: "Mi participación en el reto de 24h",
      image: imgDotDager,
      url: "https://dot-dager-mocha.vercel.app/",
      technologies: ["React JS", "Tailwind CSS"],
      description: "Landing Page para influencer DotDager",
      challenge:
        "DotDager lanzó un reto de crear una SPA (Single Page Application) en solo 2 días sin olvidar el diseño responsivo. El principal reto fue el tiempo y el integrar un juego que le gusta dentro de la misma página.",
      solution:
        "Con esta página se espera tener más alcance digital, con un estilo divertido y fresco.",
      featured: false,
    },
    {
      id: 3,
      title: "Informática Romero",
      subtitle: "Aplicación web para empresa de mantenimiento informático",
      image: imgInformatica,
      url: "https://www.informaticaromero.com",
      technologies: [
        "HTML",
        "CSS",
        "React JS",
        "Tailwind CSS",
        "Node JS",
        "MySQL",
      ],
      description:
        "Aplicación web para empresa del sector IT especializada en el mantenimiento y reparación de equipos informáticos",
      challenge:
        "Hacer un panel de administración donde pueda el administrador crear y modificar artículos para el blog, y además pueda hacer un CRUD de los productos de la tienda",
      solution:
        "Esta app web ayudó a aumentar las ventas y el alcance de la marca, haciendo la diferencia entre la competencia al tener presencia en el mercado online y poder atender solicitudes las 24h.",
      featured: true,
    },
    {
      id: 4,
      title: "Seguridad Privada",
      subtitle: "Sitio web para empresa de seguridad privada",
      image: imgSeguridad,
      url: "https://segiridad-privada-demo.vercel.app/",
      technologies: ["HTML", "CSS", "React JS", "Tailwind CSS"],
      description: "Aplicación web para empresa del sector Seguridad Privada",
      challenge:
        "Capturar el profesionalismo de la empresa y hacer que la experiencia del usuario sea agradable y rápida",
      solution:
        "El sitio web está disponible en el mercado, y este es una demo de lo que se puede hacer con esta app",
      featured: false,
    },
    {
      id: 5,
      title: "SOS PANTALLA MX",
      subtitle: "Sitio web para empresa de reparación de celulares",
      image: imgSospantalla,
      url: "https://sospantallamx.com/",
      technologies: ["HTML", "CSS", "React JS", "Tailwind CSS", "Node JS"],
      description: "Sitio web para empresa de reparación de celulares",
      challenge:
        "Crear un cotizador de reparaciones de celulares en tiempo real y que el usuario pueda ver el costo de la reparación de su celular sin necesidad de llenar un formulario",
      solution:
        "Con este cotizador solo llegan las reparaciones de celulares que el usuario solicite, sin que el equipo de atención a cliente esté tan saturado respondiendo todas las solicitudes",
      featured: false,
    },
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      "React JS": <FaReact className="text-blue-400" />,
      JavaScript: <FaJs className="text-yellow-400" />,
      HTML: <FaHtml5 className="text-orange-500" />,
      CSS: <FaCss3Alt className="text-blue-500" />,
      "Node JS": <FaNodeJs className="text-green-500" />,
      Python: <FaPython className="text-blue-600" />,
      "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
      MySQL: <SiMysql className="text-orange-600" />,
      "Electron JS": <SiElectron className="text-teal-400" />,
    };
    return iconMap[tech] || <div className="w-6 h-6 bg-gray-400 rounded"></div>;
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  // console.log(proyectId);
  return (
    <div className="min-h-screen bg-gray-50" >
      <section id="proyectos" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mis Proyectos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Una selección de mis trabajos más destacados en desarrollo
              frontend
            </p>
          </div>

          {featuredProject && (
            <div className="mb-16">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredProject.image || "/placeholder.svg"}
                      alt={featuredProject.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/20"></div>
                  </div>

                  <div className="p-8 lg:p-12 text-white">
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                        {featuredProject.title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {featuredProject.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-gray-200 leading-relaxed">
                        {featuredProject.description}
                      </p>
                      <p className="text-gray-200 leading-relaxed">
                        <span className="text-blue-400 font-semibold">
                          El principal reto:
                        </span>{" "}
                        {featuredProject.challenge}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4 text-blue-400">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {featuredProject.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg"
                          >
                            {getTechIcon(tech)}
                            <span className="text-sm">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={featuredProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                      >
                        Ver Sitio Web
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                      <button
                        onClick={() => openModal(featuredProject)}
                        className="border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{project.technologies.length - 3} más
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      Ver Sitio
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                    <button
                      onClick={() => openModal(project)}
                      className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
              >
                <FaTimes className="text-lg" />
              </button>

              <div className="overflow-y-auto max-h-[90vh] p-6 lg:p-8 text-white">
                <div className="mb-6">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg mb-6"
                  />

                  <h2 className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">
                      Descripción
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">
                      Desafío
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">
                      Solución
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">
                      Tecnologías Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg"
                        >
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      Visitar Sitio Web
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
