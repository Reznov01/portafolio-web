import { GraduationCap } from "lucide-react"

export default function PortfolioSection() {
  return (
    <div className="relative mt-32">
      {/* Background Section - 50vh height */}
      <div className="w-full h-[50vh] bg-gradient-to-b from-violet-700 to-violet-700 via-violet-600">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hola <span className="inline-block animate-wave">👋</span>, soy Rafael Romero
            <span className="block mt-2 text-xl md:text-2xl font-medium">Un gusto saludarte</span>
          </h1>

          <p className="max-w-3xl mx-auto text-white/90 text-base md:text-lg mt-6 leading-relaxed">
            Un desarrollador web Front-End autodidacta. Mi enfoque se centra en transformar desafíos en oportunidades,
            reflejado en mi portafolio la fusión de creatividad y esfuerzo que define mi viaje en el desarrollo web.
          </p>
        </div>
      </div>

      {/* Certificates Section - Positioned to overlap with the background */}
      <div className="container mx-auto px-4 relative -mt-[20vh] pb-20 ">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-8xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center py-6 text-gray-800">Certificados</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {/* Google Activate Card */}
            <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-gray-800 text-white p-6 flex items-center gap-3">
                <div className="bg-violet-600 p-2 rounded-full">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Google Activate</h3>
              </div>
              <div className="bg-gray-100 p-6 h-full">
                <p className="text-gray-700 lg:text-lg">Curso de introducción al desarrollo web: HTML y CSS</p>
              </div>
            </div>

            {/* Oracle Alura Card */}
            <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-sky-500 text-white p-6 flex items-center gap-3">
                <div className="bg-white p-2 rounded-full">
                  <GraduationCap className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold">Oracle Alura</h3>
              </div>
              <div className="bg-sky-50 p-6">
                <p className="text-gray-700 mb-3">
                  Rafael Romero ha completado 6 formaciones con una carga de trabajo estimada de 343 horas.
                </p>
                <ul className="text-sm space-y-1 text-gray-600 lg:text-lg">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    Desarrollo Personal G4
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    ONE Principiante en Programación G4
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    ONE Front End G4
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    ONE React G4
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    ONE Emprendimiento G4
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    ONE Business Agility G4
                  </li>
                </ul>
              </div>
            </div>

            {/* Otros Card */}
            <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-gray-500 text-white p-6 flex items-center gap-3">
                <div className="bg-white p-2 rounded-full">
                  <GraduationCap className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold">Otros</h3>
              </div>
              <div className="bg-gray-200 p-6 h-full">
                <ul className="space-y-2 text-gray-700 lg:text-lg">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    Sololearn - React + Redux
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    Sololearn - Responsive web design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    Sololearn - PHP
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    Sololearn - Jquery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    Freecodecamp - JavaScript Algorithms and Data Structures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

