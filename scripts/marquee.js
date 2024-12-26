document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".marquee");
  const list = container.querySelector(".marquee__list");
  const btnPrev = document.querySelector(".arrow--prev");
  const btnNext = document.querySelector(".arrow--next");

  let animationDirection = "forwards";
  function changeAnimationDirection(direction) {
    animationDirection = direction;
    container.style.setProperty("--_animation-direction", direction);
  }

  function pauseAnimation() {
    list.setAttribute("data-animation", "paused");
  }

  function resumeAnimation() {
    list.setAttribute("data-animation", "running");
  }

  function moveFirstToLast() {
    const firstItem = list.firstElementChild;
    list.appendChild(firstItem);
  }

  function moveLastToFirst() {
    const lastItem = list.lastElementChild;
    list.prepend(lastItem);
  }

  function scrollToNext() {
    pauseAnimation();
    moveFirstToLast();
    changeAnimationDirection("forwards");
    resumeAnimation();
  }

  function scrollToPrev() {
    pauseAnimation();
    moveLastToFirst();
    changeAnimationDirection("reverse");
    resumeAnimation();
  }

  btnNext.addEventListener("click", scrollToNext);
  btnPrev.addEventListener("click", scrollToPrev);
});
