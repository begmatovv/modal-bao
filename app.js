const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const close = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

const addFunc = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
close.addEventListener("click", () => {
  addFunc();
});
overlay.addEventListener("click", () => {
  addFunc();
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addFunc();
  }
});
