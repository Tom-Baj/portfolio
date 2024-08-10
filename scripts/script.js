import {
  navLinks,
  skillsList,
  projectsList,
  osList,
  softwareList,
  utilsList,
} from "./datas.js";
import { rellax } from "./animations.js";

const utilsListContainer = document.getElementById("utils-list");
const softwareListContainer = document.getElementById("software-list");
const osListContainer = document.getElementById("os-list");
const skillsListContainer = document.getElementById("technology-list");
const navLinksContainer = document.getElementById("nav-list");
const projectsListContainer = document.getElementById("projects-list");

document.addEventListener("DOMContentLoaded", () => {
  navLink(navLinks);
  skillLists(skillsList);
  projectsLists(projectsList);
  osLists(osList);
  softwareLists(softwareList);
  utilsLists(utilsList);
  addProgressBars();
  typeWriting();
  setupScrollAnimation();
  rellax();
  testCard();
});

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
    /*     progressionContainer.classList.add("progression-container");
     */ const progression = document.createElement("div");
    progression.classList.add("progress-bars");
    li.innerHTML = `
      <img src="../assets/icons/${skill.icon}.svg" alt="${skill.name}" />
      <p>${skill.name}</p>
    `;
    skillsListContainer.appendChild(li);
    li.appendChild(progression);
    /*     progressionContainer.appendChild(progression);
     */
  });
}

/* Progress */
function addProgressBars() {
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
    /*     const line = new ProgressBar.Line(progressBar, {
      strokeWidth: 4,
      easing: "easeInOut",
      duration: 1400,
      color: "#FFEA82",
      trailColor: "#eee",
      trailWidth: 1,
      svgStyle: { width: "100%", height: "100%" },
    }); */
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
function projectsLists(projects) {
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.classList.add("projects-list__project");

    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("projects-list__project__title");
    projectTitle.textContent = project.title;

    const projectImage = document.createElement("img");
    projectImage.classList.add("projects-list__project__image");
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("projects-list__project__description");
    projectDescription.textContent = project.description;

    const projectLink = document.createElement("button");
    projectLink.classList.add("projects-list__project__link");
    projectLink.href = project.link;

    projectsListContainer.appendChild(div);
    div.appendChild(projectImage);
    projectImage.appendChild(projectTitle);
    projectImage.appendChild(projectDescription);
    div.appendChild(projectLink);

    projectTitle.textContent = project.title;
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectDescription.textContent = project.description;
    projectLink.href = project.link;
    projectLink.target = "_blank";
    projectLink.textContent = "Voir le projet";
  });
}

function testCard() {
  const divTest = document.createElement("div");
  divTest.classList.add("card-test");
  divTest.innerHTML = `
  <div class="card" data-tilt data-tilt-scale="1.1">
            <h1>3D Card</h1>
          </div>
  `;
  projectsListContainer.appendChild(divTest);
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
