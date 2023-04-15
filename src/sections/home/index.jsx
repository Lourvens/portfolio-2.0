import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { AiOutlineMinus } from "react-icons/ai";
import {
  animateWrapper,
  staggerFromLeft,
  staggerFromBottom,
} from "../../utils/animation";
import socialData from "../../data/socials";
import heroBg from "../../assets/bg1.jpg";
import Navbar from "../../components/Navbar";
import AnimatedWrapper from "../../components/AnimatedWrapper";

function Header() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const lineRef = useRef(null);
  const socialsIconRef = useRef(null);
  const sideContentRef = useRef(null);

  useLayoutEffect(() => {
    const animationTimeline = gsap.timeline({ delay: 1.3 });
    const iconsTarget = gsap.utils.selector(socialsIconRef.current)("a");
    const sideContentEls = sideContentRef.current.children;

    const h1 = animateWrapper(h1Ref.current);
    const h2 = animateWrapper(h2Ref.current);
    const link = staggerFromLeft(iconsTarget);
    const leftSide = staggerFromBottom(sideContentEls);

    animationTimeline
      .add(["h1-label", h1])
      .add(h2, "-=.9")
      .fromTo(
        lineRef.current,
        {
          scaleX: 0,
        },
        { scaleX: 1 },
        "-=.2"
      )
      .add(link)
      .add(leftSide, "h1-label");
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute w-full object-cover h-full pointer-events-none"
      />
      <div className="relative min-h-screen bg-gray-900 opacity-60">
        <div className="section">
          <Navbar />
          <div className="flex flex-col lg:flex-row justify-between">
            <div>
              <h1 className="flex flex-col gap-4 text-6xl capitalize w-1/2 font-thin">
                <AnimatedWrapper ref={h1Ref}>lourvens</AnimatedWrapper>
                <AnimatedWrapper ref={h2Ref} className="tracking-[0.3em]">
                  luxamar.
                </AnimatedWrapper>
                <hr
                  className="my-2 ml-1 w-48 h-2 bg-teal-400 border-none origin-top-left"
                  ref={lineRef}
                />
              </h1>
              <div
                className="flex mt-8 lg:mt-16 gap-8 text-white text-3xl"
                ref={socialsIconRef}
              >
                {socialData.map((el, i) => (
                  <a
                    href={el.url}
                    key={`card-${i}`}
                    className="hover:text-teal-300 transform"
                  >
                    <el.Icon />
                  </a>
                ))}
              </div>
            </div>
            <div className="max-w-[360px] mt-12 lg:mt-0" ref={sideContentRef}>
              <h3 className="">
                <AiOutlineMinus /> introduction
              </h3>
              <h1 className="text-3xl font-semibold my-3 lg:my-4 font-header">
                Hello, I&apos;m a creative Frontend Engineer.
              </h1>
              <p className="text-sm text-gray-200">
                As a self-taught frontend developer, I am highly motivated and
                dedicated to continuously learning and improving my skills. I
                have a strong understanding of JavaScript, React and Data
                Structure, and have experience building visually appealing and
                interactive user interfaces for websites and applications.
                <br />
                <br />I am highly adaptable and able to quickly learn and apply
                new concepts, as evidenced by my successful self-study journey
                in frontend development.
              </p>
              <a
                href="#contact"
                className="inline-block px-4 py-2 my-2 text-white font-bold bg-teal-700 rounded border hover:bg-transparent transition"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
