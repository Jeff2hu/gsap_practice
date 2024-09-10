const loopTL = gsap.timeline({ repeat: -1, yoyo: true }); //  paused: true
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
    // onComplet: () => {
    // loadTL.to("p", { y: 600, duration: 2, opacity: 0 });
    // loopTL.play();
    // },
  },
  "<0.5"
);
