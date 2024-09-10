const loopTL = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
loopTL.to(".banner", { y: "1rem", duration: 1, ease: "power3.inOut" });

const loadTL = gsap.timeline();

loadTL.from("p", { y: 600, duration: 2, opacity: 0 });

loadTL.from(".image", {
  scale: 0,
  opacity: 0,
  borderRadius: "50%",
  duration: 2.5,
  stagger: { each: 0.25 },
});

loadTL.from(
  ".banner",
  {
    duration: 2,
    opacity: 0,
    scale: 0,
    onComplet: () => {
      loopTL.play();
    },
  },
  "<0.5"
);

// window.addEventListener("load", () => {
//   const aboutSectionImages = document.querySelectorAll(".aboutSection-image");

//   aboutSectionImages.forEach((image, index) => {
//     image.style.top = `${(index + 1) * 20}%`;
//   });
// });

// const scrollTL = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".aboutSection",
//     start: "top 60%",
//     end: "bottom 50%",
//     markers: true,
//     scrub: 2,
//   },
// });

// scrollTL.from(".aboutSection-image", {
//   opacity: 0,
//   scale: 0.8,
//   duration: 5,
//   stagger: { each: 2 },
// });
