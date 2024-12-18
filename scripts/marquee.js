document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".marquee");
  const list = container.querySelector(".marquee__list");
  const btnPrev = document.querySelector(".arrow--prev");
  const btnNext = document.querySelector(".arrow--next");

  let animationDirection = "forwards"; // Начальное направление анимации
  function changeAnimationDirection(direction) {
    animationDirection = direction;
    container.style.setProperty("--_animation-direction", direction);
  }

  // Функция остановки анимации
  function pauseAnimation() {
    list.setAttribute("data-animation", "paused"); // Остановить анимацию
  }

  // Функция возобновления анимации
  function resumeAnimation() {
    list.setAttribute("data-animation", "running"); // Запустить анимацию
  }

  // Перестановка содержимого: переместить первый элемент в конец
  function moveFirstToLast() {
    const firstItem = list.firstElementChild;
    list.appendChild(firstItem);
  }

  // Перестановка содержимого: переместить последний элемент в начало
  function moveLastToFirst() {
    const lastItem = list.lastElementChild;
    list.prepend(lastItem);
  }

  // Обработчик кнопки "вперед"
  function scrollToNext() {
    pauseAnimation(); // Остановить анимацию
    moveFirstToLast(); // Переместить первый элемент в конец
    changeAnimationDirection("forwards");
    resumeAnimation(); // Сразу возобновить анимацию
  }

  // Обработчик кнопки "назад"
  function scrollToPrev() {
    pauseAnimation(); // Остановить анимацию
    moveLastToFirst(); // Переместить последний элемент в начало
    changeAnimationDirection("reverse");
    resumeAnimation(); // Сразу возобновить анимацию
  }

  // Подключение обработчиков событий к кнопкам
  btnNext.addEventListener("click", scrollToNext);
  btnPrev.addEventListener("click", scrollToPrev);
});
