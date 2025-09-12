import {
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaNodeJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  SiElectron,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

export const Habilidades = () => {
  const skills = [
    {
      icon: FaReact,
      name: "REACT JS",
      level: "Experto",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400",
    },
    {
      icon: FaJs,
      name: "JAVASCRIPT",
      level: "Avanzado",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400",
    },
    {
      icon: SiTypescript,
      name: "TYPESCRIPT",
      level: "Avanzado",
      color: "text-blue-500",
      bgColor: "bg-blue-500",
    },
    {
      icon: SiNextdotjs,
      name: "NEXT.JS",
      level: "Avanzado",
      color: "text-white",
      bgColor: "bg-white",
    },
    {
      icon: SiTailwindcss,
      name: "TAILWIND CSS",
      level: "Experto",
      color: "text-teal-400",
      bgColor: "bg-teal-400",
    },
    {
      icon: FaCss3Alt,
      name: "CSS3",
      level: "Avanzado",
      color: "text-blue-600",
      bgColor: "bg-blue-600",
    },
    {
      icon: FaHtml5,
      name: "HTML5",
      level: "Avanzado",
      color: "text-orange-500",
      bgColor: "bg-orange-500",
    },
    {
      icon: FaNodeJs,
      name: "NODE.JS",
      level: "Intermedio",
      color: "text-green-500",
      bgColor: "bg-green-500",
    },

    {
      icon: FaGitAlt,
      name: "GIT",
      level: "Avanzado",
      color: "text-red-500",
      bgColor: "bg-red-500",
    },
    {
      icon: SiElectron,
      name: "ELECTRON",
      level: "Básico",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400",
    },
    {
      icon: FaPython,
      name: "PYTHON",
      level: "Básico",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100"
      id="habilidades"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          Mis Habilidades
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tecnologías y herramientas que domino para crear experiencias web
          excepcionales
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 ${skill.color} opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                    <IconComponent
                      className={`text-5xl md:text-6xl ${skill.color} relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center mb-3">
                  {skill.name}
                </h3>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
