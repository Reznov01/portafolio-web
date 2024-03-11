import "./App.css";
import { Menu } from "./components/menu/Menu";
import { Header } from "./components/header/Header";
import { Proyectos } from "./components/proyectos/Proyectos";
import { Habilidades } from "./components/habilidades/Habilidades";
import Experiencia from "./components/experiencia/Experiencia";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="appDiv">
      <Menu />

      <Header />

      <Proyectos />
      <Habilidades />
      <Experiencia />
      <Footer />
    </div>
  );
}

export default App;
