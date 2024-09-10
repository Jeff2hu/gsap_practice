const loadTL = gsap.timeline();

loadTL.from("p", { y: 600, duration: 2, opacity: 0 });

loadTL.from(".image", {
  scale: 0,
  opacity: 0,
  borderRadius: "50%",
  duration: 2.5,
  stagger: { each: 0.25 },
});

loadTL.from(".banner", { duration: 2, opacity: 0, scale: 0 });

// 0.5 || "0.5"
// "<1"
// ">1"
