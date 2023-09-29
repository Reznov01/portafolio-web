import { useState } from "react";
import "./App.css";
import { Menu } from "./components/menu/Menu";
import { Header } from "./components/header/Header";
import { Proyectos } from "./components/proyectos/Proyectos";
function App() {
  return (
    <>
      <div className="headerbackground">
        <Menu />
        <Header />
      </div>
      <Proyectos />
    </>
  );
}

export default App;
