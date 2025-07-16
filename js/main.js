const btnOpenSidebar = document.querySelector(".header__menu");
const sidebar = document.querySelector(".side");
const btnCloseSidebar = document.querySelector(".side__close");

btnOpenSidebar.addEventListener("click", () => {
  sidebar.classList.remove("display-none");
});

btnCloseSidebar.addEventListener("click", () => {
  sidebar.classList.add("display-none");
});
