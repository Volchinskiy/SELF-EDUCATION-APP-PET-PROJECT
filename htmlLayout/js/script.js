document.getElementById("rr").addEventListener("click", () => {
  const content = document.querySelector(".content");
  const rightSide = document.querySelector(".content__right-side");

  content.classList.toggle('--left-side-show');
  rightSide.classList.toggle('--right-side-not-stretched');
})
