import avatar from "../../assets/img/habitacion.jpeg";

import Github from "../../assets/img/github.png";

import { motion } from "framer-motion";
import "./header.css";

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
} from "react-icons/fa";
import imageAvatar from "../../assets/img/habitacion.jpeg";

export const HeaderHero = () => {
  return (
    <div className="min-h-screen bg-gray-50" id="home">
      {/* Hero Section */}
      <div className="relative px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 md:gap-12 items-center gap-20">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-blue-600 text-lg font-medium">Hola 👋</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Descubre mi mundo digital
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-600 font-medium">
                {' { name: "Rafael Romero Molina" }'}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Soy un desarrollador frontend especializado en React.js,
                apasionado por crear experiencias web modernas y funcionales.
              </p>

              <div className="flex items-center space-x-6 pt-4">
                <a
                  className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors text-decoration no-underline "
                  href="/cv.pdf"
                  download
                >
                  👀Descargar CV
                </a>

                <div className="flex items-center space-x-4">
                  {/* <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  */}
                  <a
                    href="https://www.instagram.com/rafael_conse/"
                    className="text-gray-600 hover:text-orange-600 transition-colors "
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rafael-romero-molina/"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedinIn size={28} />
                  </a>
                  {/* <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Right Content - Image with Floating Icons */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Main Profile Image */}
              <div className="relative">
                <img
                  src={avatar}
                  alt="Professional Portrait"
                  className="w-80 h-96 lg:w-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />

                {/* Floating Programming Icons with Animation */}
                <div className="absolute -top-4 -left-4 bg-orange-600 p-3 rounded-xl shadow-lg animate-bounce [animation-duration:2s]">
                  <FaReact className="text-white text-xl" />
                </div>

                <div className="absolute top-20 -right-6 bg-blue-600 p-3 rounded-xl shadow-lg animate-bounce [animation-duration:2.5s] [animation-delay:0.5s]">
                  <FaJs className="text-white text-xl" />
                </div>

                <div className="absolute top-1/2 -left-8 bg-red-600 p-3 rounded-xl shadow-lg animate-bounce [animation-duration:3s] [animation-delay:1s]">
                  <FaHtml5 className="text-white text-xl" />
                </div>

                <div className="absolute bottom-20 -right-4 bg-blue-500 p-3 rounded-xl shadow-lg animate-bounce [animation-duration:2.2s] [animation-delay:1.5s]">
                  <FaCss3Alt className="text-white text-xl" />
                </div>

                <div className="absolute -bottom-4 left-8 bg-green-600 p-3 rounded-xl shadow-lg animate-bounce [animation-duration:2.8s] [animation-delay:2s]">
                  <FaNodeJs className="text-white text-xl" />
                </div>

                <div className="absolute top-0  left-1/2 bg-yellow-500 p-3 rounded-xl shadow-lg animate-bounce [animation-duration:3.2s] [animation-delay:2.5s]">
                  <FaPython className="text-white text-xl" />
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-100 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Wave Transition */}
        <svg
          className="w-full h-20 lg:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Dots Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-8 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40 [animation-delay:1s]"></div>
          <div className="absolute bottom-4 left-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-50 [animation-delay:2s]"></div>
          <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-bounce opacity-70 [animation-delay:0.5s]"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white opacity-80"></div>
      </div>
    </div>
  );
};
