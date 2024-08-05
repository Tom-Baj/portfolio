import { navLinks, skillsList, projectsList } from "./datas.js";
import { rellax } from "./animations.js";

const skillsListContainer = document.getElementById("skills-list");
const navLinksContainer = document.getElementById("nav-list");
const projectsListContainer = document.getElementById("projects-list");

document.addEventListener("DOMContentLoaded", () => {
  NavLink(navLinks);
  SkillList(skillsList);
  ProjectsList(projectsList);
  TypeWriting();
  setupScrollAnimation();
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
function NavLink(links) {
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

/* Skills */
function SkillList(skill) {
  for (let i = 0; i < skillsList.length; i++) {
    const element = skillsList[i];
    const li = document.createElement("li");
    li.innerText = element;
    skillsListContainer.appendChild(li);
  }
}

/* Projects */
function ProjectsList(project) {
  for (let i = 0; i < projectsList.length; i++) {
    const project = projectsList[i];
    const div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">Voir le projet</a>
    `;
    projectsListContainer.appendChild(div);
  }
}

/* Type Writing */
function TypeWriting() {
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
