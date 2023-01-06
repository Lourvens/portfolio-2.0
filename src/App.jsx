import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Work from "./pages/work";

import "./styles/App.scss";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div id="App" className="max-w-[1440px] mx-auto text-teal-100">
      <Home />
      <Work />
      <Contact />
    </div>
  );
}
export default App;
