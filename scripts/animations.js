/* Rellax */
function rellax() {
  var rellax = new Rellax(".rellax", {
    horizontal: true,
  });
}

/* Header */
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

/* function initHoverTilt() {
  const tiltElements = document.querySelectorAll(".about__image-container");

  tiltElements.forEach((tiltElement) => {
    tiltElement.addEventListener("mouseenter", function () {
      VanillaTilt.init(tiltElement, {
        max: 25,
        speed: 400,
      });
    });

    tiltElement.addEventListener("mouseleave", function () {
      if (tiltElement.vanillaTilt) {
        tiltElement.vanillaTilt.destroy();
      }
    });
  });
} */

document.addEventListener("DOMContentLoaded", function () {
  initTilt();
  initHoverTilt();
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
      function initTilt() {
        const elements = document.querySelectorAll("[data-tilt]");
        VanillaTilt.init(elements, {
          max: 35,
          speed: 400,
          perspective: 1000,
        });
      }

      function initHoverTilt() {
        const tiltElements = document.querySelectorAll(
          ".about__image-container"
        );

        tiltElements.forEach((tiltElement) => {
          tiltElement.addEventListener("mouseenter", function () {
            if (!tiltElement.vanillaTilt) {
              VanillaTilt.init(tiltElement, {
                max: 25,
                speed: 400,
              });
            }
          });

          tiltElement.addEventListener("mouseleave", function () {
            if (tiltElement.vanillaTilt) {
              tiltElement.vanillaTilt.destroy();
              tiltElement.vanillaTilt = null;
            }
          });
        });
      }

      document.addEventListener("DOMContentLoaded", function () {
        initTilt();
        initHoverTilt();
      });
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
    const rotation = (scrollPosition / maxScroll) * 200;
    image.style.transform = `rotate(${rotation}deg)`;
  });
}

/* function initSubtleTilt() {
  const subtleTiltElement = document.querySelector(".about__image-container");

  if (subtleTiltElement) {
    VanillaTilt.init(subtleTiltElement, {
      max: 25,
      speed: 400,
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSubtleTilt();
}); */

function animateSaturne() {
  const saturneElement = document.querySelector(".saturne");
  const rellaxSaturne = new Rellax(saturneElement, {
    horizontal: true,
    vertical: true,
    center: false,
    wrapper: null,
    round: true,
    breakpoints: [576, 768, 1201],
    speed: -2,
    overflow: false,
    callback: function (position) {
      if (position.x >= 0) {
        saturneElement.style.overflow = "hidden";
      } else {
        saturneElement.style.overflow = "visible";
      }
      if (position.x >= window.innerWidth) {
        rellaxSaturne.destroy();
      }
    },
  });
}

export {
  headerScrolled,
  rellax,
  initTilt,
  typeWriting,
  scrollAnimation,
  animateSaturne,
};
