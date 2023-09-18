import { useState } from "react";
import "./App.css";
import { Menu } from "./components/menu/Menu";
import { Header } from "./components/header/Header";
function App() {
  return (
    <>
      <Menu />
      <Header />
    </>
  );
}

export default App;
