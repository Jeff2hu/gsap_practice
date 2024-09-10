import { Fragment, useLayoutEffect, useRef } from "react";

import bg from "./assets/bg.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const bgContainerRef = useRef(null);
  const topImgContainerRef = useRef(null);
  const downImgContainerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bgContainerRef.current,
        pin: bgContainerRef.current,
        pinSpacing: false,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
      });

      gsap.set(downImgContainerRef.current, {
        marginTop: -downImgContainerRef.current.offsetHeight,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: topImgContainerRef.current,
            pin: topImgContainerRef.current,
            scrub: 1,
            start: "0% 0%",
          },
        })
        .to(bgRef.current, { transform: "translateZ(1200px)" }, "<")
        .to(titleRef.current, { opacity: 0, y: -300 }, 0.05, "<")
        .to(descRef.current, { opacity: 0, y: -300 }, 0.08, "<")
        .fromTo(
          downImgContainerRef.current,
          { yPercent: 200, scaleY: 4 },
          { yPercent: 0, scaleY: 1 }
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Fragment>
      <div className="relative">
        <div
          ref={bgContainerRef}
          className="absolute bg bg-[#141414] w-screen h-screen z-[-1]"
        ></div>
        <section>
          <div
            ref={topImgContainerRef}
            className="h-screen w-screen img-container perspective flex items-center justify-center"
          >
            <img ref={bgRef} className="image" src={bg} alt="bg" />
            <div className="text-white absolute flex flex-col justify-center items-center">
              <h1 ref={titleRef} className="text-[170px] ">
                <span className="text-storke">Outlook</span> Above
              </h1>
              <p
                ref={descRef}
                className="opacity-50 w-48 text-[13px] text-center"
              >{`A Showcase of the world's best aerial photography`}</p>
            </div>
          </div>
          <div
            ref={downImgContainerRef}
            className="container flex flex-wrap items-center justify-around py-12"
          >
            <div className="col-1 flex flex-col gap-16 translate-y-[30%] pb-8">
              <img className="w-[450px] h-[350px]" src={img1} alt="" />
              <img className="w-[400px] h-[400px]" src={img2} alt="" />
            </div>
            <div className="col-2 flex flex-col gap-16">
              <img className="w-[650px] h-[400px]" src={img3} alt="" />
              <img className="w-[450px] h-[450px] last" src={img4} alt="" />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
