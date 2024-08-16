function rellax() {
  var rellax = new Rellax(".rellax", {
    horizontal: true,
  });
}

/* Header Scroll */
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
    max: 35,
    speed: 1000,
    perspective: 1000,
    scale: 1.1,
    reverse: true,
    glare: true,
    "max-glare": 0.5,
  });
}

function initHoverTilt() {
  const tiltElements = document.querySelectorAll(".about__image-container");

  tiltElements.forEach((tiltElement) => {
    tiltElement.addEventListener("mouseenter", function () {
      VanillaTilt.init(tiltElement, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    });

    tiltElement.addEventListener("mouseleave", function () {
      if (tiltElement.vanillaTilt) {
        tiltElement.vanillaTilt.destroy();
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initTilt(); // Initialisation générale pour tous les éléments avec data-tilt (si nécessaire)
  initHoverTilt(); // Initialisation spécifique pour le hover
});

/* Type Writing */
function typeWriting() {
  let typeWriting = document.querySelector(".type-writing");
  let content = typeWriting.textContent;
  typeWriting.textContent = "";

  let i = 0;
  let timer = setInterval(() => {
    if (i < content.length) {
      typeWriting.textContent += content.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      typeWriting.classList.remove("type-writing");
      typeWriting.classList.add("slow-cursor");
    }
  }, 150);
}

/* Scroll Animation */
function scrollAnimation() {
  const image = document.querySelector(".home__image-container--image");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const rotation = (scrollPosition / maxScroll) * 100;
    image.style.transform = `rotate(${rotation}deg)`;
  });
}

export { headerScrolled, rellax, initTilt, typeWriting, scrollAnimation };
