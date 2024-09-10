// const loopTL = gsap.timeline({ repeat: 4 });
// loopTL.to(".banner", { y: "1rem", duration: 1, ease: "power3.inOut" });
// loopTL.to(".banner", { y: "0rem", duration: 1, ease: "power3.inOut" });

// const loopTL = gsap.timeline({ repeat: -1, yoyo: true });
// loopTL.to(".banner", { y: "1rem", duration: 1, ease: "power3.inOut" });

// pause, play, timeScale

const loadTL = gsap.timeline();

loadTL.from("p", { y: 600, duration: 2, opacity: 0 });

loadTL.from(".image", {
  scale: 0,
  opacity: 0,
  borderRadius: "50%",
  duration: 2.5,
  stagger: { each: 0.25 },
});

loadTL.from(".banner", { duration: 2, opacity: 0, scale: 0 }, "<0.5");
