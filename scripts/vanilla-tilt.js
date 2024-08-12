import VanillaTilt from "vanilla-tilt";

export function initTilt() {
  const elements = document.querySelectorAll("[data-tilt]");
  VanillaTilt.init(elements, {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  });
}
