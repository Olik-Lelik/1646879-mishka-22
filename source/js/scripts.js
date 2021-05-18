const toggle = document.querySelector(".page-header__toggle");
const nav = document.querySelector(".main-nav");

const catalogLink1 = document.querySelector(".catalog__link--1");
const catalogLink2 = document.querySelector(".catalog__link--2");
const catalogLink3 = document.querySelector(".catalog__link--3");
const modalPopup = document.querySelector(".modal");

nav.classList.add("main-nav--closed");

toggle.classList.add("page-header__toggle--closed");

toggle.addEventListener("click", function() {
  toggle.classList.toggle("page-header_toggle--opened");
  nav.classList.toggle("main-nav--opened");
  nav.classList.toggle("main-nav--closed");
});

catalogLink1.addEventListener("click",
function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal--opened");
});

catalogLink2.addEventListener("click",
function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal--opened");
});

catalogLink3.addEventListener("click",
function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal--opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal--opened")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal--opened");
    }
  }
});
