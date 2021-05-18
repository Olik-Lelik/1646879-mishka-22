const catalogLink1 = document.querySelector(".catalog__link--1");
const catalogLink2 = document.querySelector(".catalog__link--2");
const catalogLink3 = document.querySelector(".catalog__link--3");
const modalPopup = document.querySelector(".modal");

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
