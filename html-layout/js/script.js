document.querySelector(".header__left-side-menu-button").addEventListener("click", () => {
  const content = document.querySelector(".content");
  const rightSide = document.querySelector(".content__right-side");

  content.classList.toggle('--left-side-show');
  rightSide.classList.toggle('--right-side-not-stretched');
})

document.querySelector(".content__left-side-button-add-question").addEventListener("click", () => {
  const content = document.querySelector(".content");

  content.classList.toggle("--short-content");
})