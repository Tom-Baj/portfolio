import {
  navLinks,
  skillsList,
  projectsList,
  osList,
  softwareList,
  utilsList,
  socialLinks,
} from "./datas.js";

import {
  headerScrolled,
  rellax,
  initTilt,
  typeWriting,
  scrollAnimation,
  animateSaturne,
} from "./animations.js";

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
  typeWriting();
  scrollAnimation();
  rellax();
  headerScrolled();
  populateSocialLinks(socialLinks);
  createProjectsContent(projectsList);
  animateSaturne();
});

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

    div.appendChild(projectImage);
    div.appendChild(projectOverlay);
    projectOverlay.appendChild(projectTitle);

    projectsListContainer.appendChild(div);

    // Ajouter un écouteur d'événement pour ouvrir le drawer
    div.addEventListener("click", function () {
      openDrawer(project.id);
    });

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

/* Projects Informations */
function createProjectsContent(projects) {
  const drawer = document.getElementById("drawer");

  // Créer la div drawer-container
  const drawerContainer = document.createElement("div");
  drawerContainer.classList.add("drawer__container");

  projects.forEach((project) => {
    const projectContent = document.createElement("div");
    projectContent.classList.add("project-content");
    projectContent.id = `content-${project.id}`;
    projectContent.style.display = "none"; // Caché par défaut

    const closeContainer = document.createElement("div");
    closeContainer.classList.add("drawer__close-container");

    const closeButton = document.createElement("button");
    closeButton.classList.add("drawer__close");
    closeButton.addEventListener("click", closeDrawer);

    closeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M18.3 5.71a1 1 0 0 0-1.42-1.42L12 9.59 7.11 4.7a1 1 0 0 0-1.42 1.42L10.59 12l-4.9 4.9a1 1 0 1 0 1.42 1.42L12 14.41l4.9 4.9a1 1 0 0 0 1.42-1.42L13.41 12l4.9-4.9z"/>
    </svg>
  `;

    const projectContentTitle = document.createElement("h3");
    projectContentTitle.classList.add("project-content__title");
    projectContentTitle.textContent = project.title;

    const projectContentDescription = document.createElement("h4");
    projectContentDescription.classList.add("project-content__description");
    projectContentDescription.textContent = project.description;

    const projectContentRole = document.createElement("p");
    projectContentRole.classList.add("project-content__role");
    projectContentRole.textContent = project.role;

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("project-content__link-container");

    const buttonLink = document.createElement("a");
    buttonLink.classList.add("project-content__button--link");
    buttonLink.textContent = "Voir le projet";

    const buttonCode = document.createElement("a");
    buttonCode.classList.add("project-content__button--code");
    buttonCode.textContent = "Voir le code";
    buttonCode.href = project.code;
    buttonCode.target = "_blank";

    if (project.link) {
      buttonLink.href = project.link;
      buttonLink.target = "_blank";
    } else {
      buttonLink.disabled = true;
      buttonLink.classList.add("remove");
    }

    linkContainer.appendChild(buttonLink);
    linkContainer.appendChild(buttonCode);

    projectContent.appendChild(closeContainer);
    closeContainer.appendChild(closeButton);
    projectContent.appendChild(projectContentTitle);
    projectContent.appendChild(projectContentDescription);
    projectContent.appendChild(projectContentRole);
    projectContent.appendChild(linkContainer);

    drawerContainer.appendChild(projectContent);
  });

  // Ajouter drawerContainer à la div drawer
  drawer.appendChild(drawerContainer);
}

/* Footer Links */
function populateSocialLinks(links) {
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

/* Add Progress Bar */
let progressBarsAdded = false;
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (!progressBarsAdded && scrollPosition >= 1028 && scrollPosition <= 1038) {
    progressBar();
    progressBarsAdded = true;
  }
});

function openDrawer(projectId) {
  const drawer = document.getElementById("drawer");
  const mainContainer = document.querySelector(".main__container");

  // Masquer toutes les sections de contenu
  const allContents = drawer.querySelectorAll(".project-content");
  allContents.forEach((content) => {
    content.style.display = "none";
  });

  // Afficher le contenu spécifique
  const projectContent = document.getElementById(`content-${projectId}`);
  if (projectContent) {
    projectContent.style.display = "block";
  }

  // Ajouter la classe pour ouvrir le drawer et ajuster le contenu principal
  drawer.classList.add("open");
  mainContainer.classList.add("drawer-open");
}

function closeDrawer() {
  const drawer = document.getElementById("drawer");
  const mainContainer = document.querySelector(".main__container");

  // Supprimer la classe pour fermer le drawer et rétablir le contenu principal
  drawer.classList.remove("open");
  mainContainer.classList.remove("drawer-open");
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});
