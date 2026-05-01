import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

gsap.registerPlugin(useGSAP);

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgEl = document.querySelector(".svg");
          if (svgEl) svgEl.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.8,
      y: "75%",
      bottom: "55%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      xPercent: -50,
      duration: 2,
      delay: "-.9",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 `z-10` w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-5 px-5">
              <div className="logo flex gap-4">
                <div className="lines flex flex-col gap-[4px]">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-6 h-1 bg-white"></div>
                  <div className="line w-3 h-1 bg-white"></div>
                </div>
                <h3 className="text-2xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="sky absolute scale-[1.5] roatate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute scale-[1.8] rotate-[-4deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[7rem] leading-none -ml-15">grand</h1>
                <h1 className="text-[7rem] leading-none ml-20">theft</h1>
                <h1 className="text-[7rem] leading-none -ml-18">auto</h1>
              </div>
              <img
                className="character absolute -bottom-[150%] left-1/4 scale-[2] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 `bg-gradient-to-t` from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Arial]">Scroll Down</h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full max-w-[1400px] h-[80%] items-center justify-between px-10">
              {/* LEFT IMAGE */}
              <div className="limg relative w-1/2 h-full flex items-center justify-center">
                <img
                  className="w-[80%] object-contain"
                  src="./imag.png"
                  alt=""
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="rg w-[55%] flex flex-col justify-center">
                {/* HEADINGS */}
                <h1 className="text-[4rem] leading-[0.99] font-black mb-2">
                  Still Running,
                </h1>
                <h1 className="text-[4rem] leading-[0.82] font-black mb-6">
                  Not Hunting
                </h1>

                {/* PARAGRAPHS */}
                <p className="text-[14px] leading-6 text-gray-300 mb-2 font-[Arial] max-w-[500px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>

                <p className="text-[14px] leading-6 text-gray-300 mb-2 font-[Arial] max-w-[500px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam?
                </p>

                <p className="text-[14px] leading-6 text-gray-300 mb-4 font-[Arial] max-w-[500px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit.
                </p>

                {/* BUTTON */}
                <a
                  href="https://www.rockstargames.com/VI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-7 py-4 text-xl w-fit hover:bg-yellow-400 transition inline-block"
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
