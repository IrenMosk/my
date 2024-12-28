// Получаем элементы
const sliderItems = document.querySelectorAll(".slider__item");
const prevButton = document.querySelector(".arrow-slider--prev");
const nextButton = document.querySelector(".arrow-slider--next");

// Универсальная функция для установки активного элемента
function setActiveItem(item) {
  sliderItems.forEach((slider) => slider.classList.remove("active")); // Убираем .active у всех
  item.classList.add("active"); // Добавляем .active текущему
}

// Функция для получения текущего индекса активного элемента
function getActiveIndex() {
  return [...sliderItems].findIndex((item) =>
    item.classList.contains("active")
  );
}

// Функция для обновления активного элемента по индексу
function updateActiveItem(index) {
  const boundedIndex = (index + sliderItems.length) % sliderItems.length; // Учитываем зацикливание
  setActiveItem(sliderItems[boundedIndex]);
}

// Обработчики для кнопок
prevButton.addEventListener("click", () => {
  const currentIndex = getActiveIndex();
  updateActiveItem(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  const currentIndex = getActiveIndex();
  updateActiveItem(currentIndex + 1);
});

// Обработчики для наведения мыши
sliderItems.forEach((item) => {
  item.addEventListener("mouseover", () => setActiveItem(item)); // Наведение
});
