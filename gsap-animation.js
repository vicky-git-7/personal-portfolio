
gsap.from(".hero h1", {
    duration: 2.5,
    y: -50,
    opacity: 0,
    ease: "power3.out",
  });
  
  gsap.to(".btn", {
    duration: 0.9,
    scale: 0.9,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
  