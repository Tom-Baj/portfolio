function rellax() {
  var rellax = new Rellax(".rellax", {
    horizontal: true,
  });
}

function headerScrolled() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function initTilt() {
  const elements = document.querySelectorAll("[data-tilt]");
  VanillaTilt.init(elements, {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  });
}

export { headerScrolled, rellax, initTilt };
