import "./styles/App.css";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="App">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <HeroImage />
      <Menu setMenuActive={setMenuActive} menuActive={menuActive} />
    </div>
  );
}

export default App;
