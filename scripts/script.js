import { navLinks, skillsList, projectsList } from "./datas.js";

const skillsListContainer = document.getElementById("skills-list");
const navLinksContainer = document.getElementById("nav-list");
const projectsListContainer = document.getElementById("projects-list");

document.addEventListener("DOMContentLoaded", () => {
  NavLink(navLinks);
  SkillList(skillsList);
  ProjectsList(projectsList);
});

function NavLink(links) {
  links.forEach((link) => {
    const li = document.createElement("li");
    li.classList.add("header__nav-list__item");
    const a = document.createElement("a");
    a.href = link.path;
    a.textContent = link.name;
    li.appendChild(a);
    navLinksContainer.appendChild(li);
  });
}

function SkillList(skill) {
  for (let i = 0; i < skillsList.length; i++) {
    const element = skillsList[i];
    const li = document.createElement("li");
    li.innerText = element;
    skillsListContainer.appendChild(li);
  }
}

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
