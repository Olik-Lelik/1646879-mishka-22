const catalogLink = document.querySelector(".catalog__link");
const modalPopup = document.querySelector(".modal");

catalogLink.addEventListener("click",
function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal--opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "27") {
    if (modalPopup.classList.contains("modal--opened")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal--opened");
    }
  }
});
