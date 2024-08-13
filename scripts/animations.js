function rellax() {
  var rellax = new Rellax(".rellax");
}

function headerScrolled() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

export { headerScrolled, rellax };
