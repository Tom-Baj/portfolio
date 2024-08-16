import {
  navLinks,
  skillsList,
  projectsList,
  osList,
  softwareList,
  utilsList,
  socialLinks,
} from "./datas.js";

import { headerScrolled, rellax, initTilt } from "./animations.js";

const utilsListContainer = document.getElementById("utils-list");
const softwareListContainer = document.getElementById("software-list");
const osListContainer = document.getElementById("os-list");
const skillsListContainer = document.getElementById("technology-list");
const navLinksContainer = document.getElementById("nav-list");
const projectsListContainer = document.getElementById("projects-list");
const socialLinksContainer = document.querySelector(".social-links"); // Correction ici

const grid = document.querySelector(".projects-list");

document.addEventListener("DOMContentLoaded", () => {
  navLink(navLinks);
  skillLists(skillsList);
  createProjects(projectsList);
  osLists(osList);
  softwareLists(softwareList);
  utilsLists(utilsList);
  /*   progressBar();
   */ typeWriting();
  setupScrollAnimation();
  rellax();
  headerScrolled();
  afficherProjets();
  populateSocialLinks(socialLinks); // Correction ici
});

/* Change Header Appearance on Scroll */
function headerToggle() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* Scroll Animation */
function setupScrollAnimation() {
  const image = document.querySelector(".home__image-container--image");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const rotation = (scrollPosition / maxScroll) * 100;
    image.style.transform = `rotate(${rotation}deg)`;
  });
}

/* Nav Links */
function navLink(links) {
  links.forEach((link) => {
    const li = document.createElement("li");
    li.classList.add("header__container__nav-item");
    const a = document.createElement("a");
    a.classList.add("header__container__nav-link");
    a.href = link.path;
    a.textContent = link.name;
    li.appendChild(a);
    navLinksContainer.appendChild(li);
  });
}

/* Skills Technology */
function skillLists(skills) {
  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.classList.add("skill");
    const progressionContainer = document.createElement("div");
    const progression = document.createElement("div");
    progression.classList.add("progress-bars");
    li.innerHTML = `
      <img src="../assets/icons/${skill.icon}.svg" alt="${skill.name}" />
      <p>${skill.name}</p>
    `;
    skillsListContainer.appendChild(li);
    li.appendChild(progression);
  });
}

/* Progress bar*/
function progressBar() {
  const allProgressBars = document.querySelectorAll(".progress-bars");
  allProgressBars.forEach((progressBar, index) => {
    const line = new ProgressBar.Line(progressBar, {
      strokeWidth: 2,
      easing: "easeInOut",
      duration: 2000,
      color: "#FFEA82",
      trailColor: "#eee",
      trailWidth: 1,
      svgStyle: { width: "100%", height: "20%" },
      text: {
        style: {
          color: "hsla(75, 6%, 87%, 1)",
          position: "absolute",
          right: "0",
          top: "30px",
          padding: 0,
          margin: 0,
          transform: null,
        },
        autoStyleContainer: false,
      },
      from: { color: "#BC4749" },
      to: { color: "#9add00" },
      step: (state, line) => {
        line.path.setAttribute("stroke", state.color);
        line.setText(Math.round(line.value() * 100) + " %");
      },
    });
    line.animate(skillsList[index].progression);
  });
}

/* Os List */
function osLists(os) {
  os.forEach((osItem) => {
    const li = document.createElement("li");
    li.classList.add("os");
    li.innerHTML = `
      <img src="../assets/icons/${osItem.icon}.svg" alt="${osItem.name}" />
      <p>${osItem.name}</p>
    `;
    osListContainer.appendChild(li);
  });
}

/* Software List */
function softwareLists(software) {
  softwareList.forEach((software) => {
    const li = document.createElement("li");
    li.classList.add("software");
    li.innerHTML = `
      <img src="../assets/icons/${software.icon}.svg" alt="${software.name}" />
      <p>${software.name}</p>
    `;
    softwareListContainer.appendChild(li);
  });
}

/* Utils */
function utilsLists(utils) {
  utils.forEach((util) => {
    const li = document.createElement("li");
    li.classList.add("util");
    li.innerHTML = `
      <img src="../assets/icons/${util.icon}.svg" alt="${util.name}" />
      <p>${util.name}</p>
    `;
    utilsListContainer.appendChild(li);
  });
}

/* Projects */
function createProjects(projects) {
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.classList.add(
      "projects-list__project",
      `projects-list__project${project.size}`,
      "project"
    );
    div.id = project.id;

    const projectImage = document.createElement("img");
    projectImage.classList.add("projects-list__project__image");
    projectImage.alt = project.title;
    projectImage.src = project.image;

    const projectOverlay = document.createElement("div");
    projectOverlay.classList.add("overlay");

    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("overlay__title");
    projectTitle.textContent = project.title;

    projectsListContainer.appendChild(div);
    div.appendChild(projectImage);
    div.appendChild(projectOverlay);
    projectOverlay.appendChild(projectTitle);

    // Initialisation de Masonry après l'ajout des projets
    imagesLoaded(grid, function () {
      new Masonry(grid, {
        itemSelector: ".projects-list__project",
        percentPosition: true,
        columnWidth: ".projects-list__project",
        stagger: 30,
        gutter: 10,
      });
    });
  });
}

/* const projectModal */
function afficherProjets(project) {
  const allProjects = document.querySelectorAll(".projects-list__project");
  const allOverlays = document.querySelectorAll(".overlay");
  allProjects.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      overlay.classList.add("active");
      console.log(project.id);
    });
  });
}

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

/* Footer Links */
function populateSocialLinks(links) {
  // Renommé ici
  links.forEach((link) => {
    const linkContainer = document.createElement("div");
    linkContainer.classList.add("footer__social-links__link-container");
    linkContainer.id = link.id;

    const linkElement = document.createElement("a");
    linkElement.classList.add("footer__social-links__link");
    linkElement.href = link.link;

    const linkIcon = document.createElement("img");
    linkIcon.classList.add("footer__social-links__icon");
    linkIcon.src = `../assets/icons/social/${link.icon}.svg`;

    const linkTitle = document.createElement("p");
    linkTitle.classList.add("footer__social-links__title");
    linkTitle.textContent = link.name;

    socialLinksContainer.appendChild(linkContainer);
    linkContainer.appendChild(linkElement);
    linkElement.appendChild(linkIcon);
    linkElement.appendChild(linkTitle);
  });
}

/* Add Progress Bar */
let progressBarsAdded = false;
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (!progressBarsAdded && scrollPosition >= 1028 && scrollPosition <= 1038) {
    progressBar();
    progressBarsAdded = true;
  }
});
