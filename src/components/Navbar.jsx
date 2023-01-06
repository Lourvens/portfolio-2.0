import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import logoImg from "../assets/logo-2.svg";

function Navbar() {
  const [isNavExpanded, setNavExpanded] = useState(false);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  const styles = {
    link: "text-xl first-letter:capitalize",
  };
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const q = gsap.utils.selector(linksRef);
    tl.fromTo(
      logoRef.current,
      {
        duration: 0.4,
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
      }
    ).fromTo(
      q("li"),
      {
        duration: 0.4,
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      },
      "-=.1"
    );
  }, []);
  return (
    <nav className="flex justify-between items-center mb-36">
      <a href="#" ref={logoRef}>
        <img src={logoImg} alt="" className="w-12" />
      </a>
      <ul className="lg:flex gap-x-16 hidden" ref={linksRef}>
        <li className={styles.link}>
          <a href="#about" className="active">
            about me
          </a>
        </li>
        <li className={styles.link}>
          <a href="#project">projects</a>
        </li>
        <li className={styles.link}>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <button
        className={`lg:hidden hamburger hamburger--elastic ${
          isNavExpanded ? "is-active" : ""
        }`}
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        aria-expanded="true/false"
        onClick={() => {
          setNavExpanded((v) => !v);
        }}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  );
}

export default Navbar;
