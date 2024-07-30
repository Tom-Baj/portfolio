document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/nav.json")
    .then((response) => response.json())
    .then((data) => {
      const navList = document.getElementById("nav-list");
      data.navlinks.forEach((link) => {
        const listItem = document.createElement("li");
        listItem.className = "header__nav-item";
        const anchor = document.createElement("a");
        anchor.className = "header__nav-link";
        anchor.href = link.path;
        anchor.textContent = link.name;
        listItem.appendChild(anchor);
        navList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error loading navigation:", error));
});
