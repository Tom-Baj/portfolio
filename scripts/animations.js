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
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function initTilt() {
  const elements = document.querySelectorAll("[data-tilt]");
  VanillaTilt.init(elements, {
    max: 35,
    speed: 400,
    perspective: 1000,
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
    const rotation = (scrollPosition / maxScroll) * 200; // Augmentation de la vitesse de rotation
    image.style.transform = `rotate(${rotation}deg)`;
  });
}

function initSubtleTilt() {
  const subtleTiltElement = document.querySelector(".about__image-container");

  if (subtleTiltElement) {
    VanillaTilt.init(subtleTiltElement, {
      max: 10, // Angle d'inclinaison réduit
      speed: 600, // Vitesse plus lente
      scale: 1.02, // Légère mise à l'échelle pour un effet subtil
      glare: false, // Pas d'effet de reflet (glare) pour un rendu plus sobre
      "max-glare": 0, // Désactiver le glare si vous l'avez configuré ailleurs
      easing: "cubic-bezier(.03,.98,.52,.99)", // Adoucir l'animation avec une courbe d'accélération
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSubtleTilt(); // Initialisation spécifique pour cet élément
});

export { headerScrolled, rellax, initTilt, typeWriting, scrollAnimation };
