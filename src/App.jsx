import "./App.css";
import { Menu } from "./components/menu/Menu";
import { HeaderHero } from "./components/header/HeaderHero";
import { Proyectos } from "./components/proyectos/Proyectos";
import { Habilidades } from "./components/habilidades/Habilidades";
import Experiencia from "./components/experiencia/Experiencia";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="appDiv">
      <Menu />
      <main className="flex flex-col">
        <HeaderHero />

        <Proyectos />
        <section>
          <Habilidades />
        </section>
        <section>
          <Experiencia />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
