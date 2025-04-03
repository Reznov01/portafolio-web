import { Home, FolderKanban, GraduationCap, User } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Custom styles using inline CSS
  const footerStyles = {
    backgroundImage: 'linear-gradient(to bottom, #1a1f35, #0f1525)',
    boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)'
  }

  const linkHoverStyle = {
    transform: 'translateX(5px)'
  }

  return (
    <footer className="w-full text-white bg-[#21252c]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4  p-2 rounded-lg ">
            <h3 className="text-xl font-bold border-b border-violet-500 pb-2 inline-block">Rafael Romero</h3>
            <p className="text-gray-300 text-md leading-relaxed">
              Desarrollador Front-End apasionado por crear experiencias web intuitivas y atractivas que resuelvan
              problemas reales.
            </p>
           
          </div>

          {/* Quick Links */}
          <div className="space-y-4  p-2 rounded-lg ">
            <h3 className="text-xl font-bold border-b border-violet-500 pb-2 inline-block">Navegacion</h3>
            <ul className="space-y-2 ">
              <li>
                <a 
                  href="#headerHero" 
                  className="hover:text-green-400 transition-all duration-300 flex -ml-8 no-underline text-cyan-300"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
                  onMouseOut={(e) => e.currentTarget.style.transform = ''}
                >
                  <span className="mr-2 flex items-center">
                    <Home className="w-4 h-4 mr-1" />
                  </span> 
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#proyectosDiv" 
                  className="hover:text-green-400 transition-all duration-300 -ml-8 flex items-center no-underline text-cyan-300"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
                  onMouseOut={(e) => e.currentTarget.style.transform = ''}
                >
                  <span className="mr-2 flex items-center">
                    <FolderKanban className="w-4 h-4 mr-1" />
                  </span> 
                  Proyectos
                </a>
              </li>
              <li>
                <a 
                  href="#certificadosDiv" 
                  className="hover:text-green-400 transition-all duration-300 -ml-8 flex items-center no-underline text-cyan-300"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => Object.assign(e.currentTarget.style, linkHoverStyle)}
                  onMouseOut={(e) => e.currentTarget.style.transform = ''}
                >
                  <span className="mr-2 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-1" />
                  </span> 
                  Certificados
                </a>
              </li>
             
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 backdrop-blur-sm bg-navy-900/40 p-2 rounded-lg ">
            <h3 className="text-xl font-bold border-b border-violet-500 pb-2 inline-block">Contacto</h3>
            <ul className="space-y-3 text-cyan-300">
              <li className="flex items-start  transition-all duration-300 -ml-8 hover:translate-x-2 ">
                <svg
                  className="w-5 h-5 mr-3 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <a href="https://github.com/Reznov01" target="_blank" rel="noopener noreferrer" className="no-underline text-cyan-300 hover:text-green-300"  >
                  Github
                </a>
              </li>
              <li className="flex items-start  transition-all duration-300 -ml-8 hover:translate-x-2">
                <svg
                  className="w-5 h-5 mr-3 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <a href="https://www.linkedin.com/in/rafael-romero-molina/" target="_blank" rel="noopener noreferrer" className="no-underline text-cyan-300 hover:text-green-300 ">
                  Linkedin
                </a>
              </li>
              <li className="flex items-start  transition-colors duration-300 -ml-8">
                <svg
                  className="w-5 h-5 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full py-4 bg-navy-950/80 text-center backdrop-blur-sm border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} Rafael Romero.</p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0 flex items-center justify-center">
            Hecha con
            <span className="mx-1 text-red-500 animate-pulse">❤️</span>y<span className="mx-1 text-amber-700">☕</span>
            por Rafael Romero
          </p>
        </div>
      </div>
    </footer>
  )
}

