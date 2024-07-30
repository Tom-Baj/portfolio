import { navLinks, skillsList, projectsList } from "./datas.js";

document.addEventListener("DOMContentLoaded", () => {
  NavLink(navLinks);
  SkillList(skillsList);
});

function NavLink(links) {
  const navLinksContainer = document.getElementById("nav-list");
  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    li.appendChild(a);
    navLinksContainer.appendChild(li);
  });
}

function SkillList(skill) {
  for (let i = 0; i < skillsList.length; i++) {
    const element = skillsList[i];
    const skillsListContainer = document.getElementById("skills__list");
    const li = document.createElement("li");
    li.innerText = element;
    skillsListContainer.appendChild(li);
  }
}
