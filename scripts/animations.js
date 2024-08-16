function rellax() {
  var rellax = new Rellax(".rellax", {
    horizontal: true,
  });
}

function headerScrolled() {
  const header = document.querySelector("header");
  const headerLogo = document.querySelector(".header__container__logo");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
      headerLogo.classList.add("hidden");
    } else {
      header.classList.remove("scrolled");
      headerLogo.classList.remove("hidden");
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
