const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".main-navbar__list");

const links = document.querySelectorAll(".main-navbar__item");

hamburgerMenu.addEventListener("click", () => {
    navList.classList.toggle("open");
});