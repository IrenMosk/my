const scrollers = document.querySelectorAll(".marquee");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".marquee__list");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".marquee");
  const items = document.querySelectorAll(".marquee__item");
  const btnPrev = document.querySelector(".arrow--prev");
  const btnNext = document.querySelector(".arrow--next");
  let animationDirection = "forwards"; // Текущее направление анимации

  // Функция для смены направления
  function changeAnimationDirection(direction) {
    animationDirection = direction;
    container.style.setProperty("--_animation-direction", direction);
  }

  // Обработчики кнопок
  btnPrev.addEventListener("click", () => {
    changeAnimationDirection("reverse"); // Меняем направление на обратное
  });

  btnNext.addEventListener("click", () => {
    changeAnimationDirection("forwards"); // Меняем направление на прямое
  });

  let itemWidth = items[0].offsetWidth + 10; // Ширина элемента + gap

  // Прокрутка вперед
  function scrollToNext() {
    container.scrollBy({
      left: itemWidth, // Прокрутка вправо на ширину одного элемента
      behavior: "smooth",
    });
  }

  // Прокрутка назад
  function scrollToPrev() {
    container.scrollBy({
      left: -itemWidth, // Прокрутка влево на ширину одного элемента
      behavior: "smooth",
    });
  }

  // Обработчики кнопок
  btnNext.addEventListener("click", scrollToNext);
  btnPrev.addEventListener("click", scrollToPrev);

  // Обновление ширины элемента при изменении размера окна
  window.addEventListener("resize", () => {
    itemWidth = items[0].offsetWidth + 10; // Пересчет ширины элемента
  });
});
