import React from "react";
import TypewriterComponent from "typewriter-effect";

function TitleEffect() {
  const content = [
    `Hello, I'm an highly skilled 🎯 <b>Full-stack Developer.</b> who is...`,
    `Passionate about <b>creating stunning 🌟</b> and <b>responsive web apps</b> 💻 that make life easier for users`,
    `Constantly seeking ways to optimize and <b>improve web app performance</b> for speed 🚀 and efficiency`,
    `Driven by the desire to build 🚀 <b>modern</b> and <b>scalable</b> web apps with new techniques and <b>technologies</b>`,
    `Finding joy in <b>creating beautiful</b>😍 and <b>functional web solutions</b> as a Full-stack Developer 💻.`,
  ];
  return (
    <div className="lg:h-24 h-32 mb-4">
      <TypewriterComponent
        options={{
          loop: true,
          wrapperClassName: "typewriter",
          strings: content,
          autoStart: true,
          delay: 35,
          deleteSpeed: 1,
        }}
      />
    </div>
  );
}

export default TitleEffect;
