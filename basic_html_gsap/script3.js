// gsap.from("p", { y: 600, duration: 2, opacity: 0 });

gsap.from(".image", {
  scale: 0,
  opacity: 0,
  borderRadius: "50%",
  duration: 2,
  stagger: { each: 0.5 },
});

// gsap.from(".banner", { duration: 2, opacity: 0, scale: 0 });
