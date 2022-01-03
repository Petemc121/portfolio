import "./styles/App.css";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="App">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <HeroImage />
      <Menu setMenuActive={setMenuActive} menuActive={menuActive} />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
