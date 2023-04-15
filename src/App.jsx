import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Home from "./sections/home";
import Contact from "./sections/contact";
import Work from "./sections/work";

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
