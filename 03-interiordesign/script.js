// const toggle = document.querySelector(".menu-button");
// const container = document.querySelector(".main-section");
// const aside = document.querySelector(".mobile-menu");
// const closeBtn = document.querySelector(".close-btn");

// toggle.addEventListener("click", function () {
//   aside.classList.add("mobile-menu-show");
// });

// closeBtn.addEventListener("click", function () {
//   aside.classList.add("hide-all");
//   container.classList.remove("hide-all");
// });

const menu_btn = document.querySelector(".menu-btn");
const mobile_menu = document.querySelector(".mobile-menu");
const menu_close = document.querySelector(".menu-close");
menu_btn.addEventListener("click", () => {
  mobile_menu.classList.add("menu-mobile-enable");
});
menu_close.addEventListener("click", () => {
  mobile_menu.classList.remove("menu-mobile-enable");
});