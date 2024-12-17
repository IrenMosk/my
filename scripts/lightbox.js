document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.querySelector(".marquee__list");
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = lightbox.querySelector(".lightbox__image");
  const lightboxClose = lightbox.querySelector(".lightbox__close");

  // Обработчик клика на элементы списка
  marquee.addEventListener("click", (event) => {
    const target = event.target.closest(".marquee__item"); // Используем closest для нахождения родительского элемента

    // Проверяем, что клик был по элементу marquee__item
    if (target) {
      const fullImageSrc = target.getAttribute("data-full-src"); // Получаем URL большой версии из data-атрибута
      if (fullImageSrc) {
        lightboxImage.src = fullImageSrc; // Устанавливаем изображение в lightbox
        lightbox.setAttribute("aria-hidden", "false"); // Показываем lightbox
      }
    }
  });

  // Закрытие lightbox по клику на кнопку закрытия
  lightboxClose.addEventListener("click", () => {
    lightbox.setAttribute("aria-hidden", "true"); // Скрываем lightbox
    lightboxImage.src = ""; // Очищаем src изображения
  });

  // Закрытие lightbox по клику вне изображения
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
    }
  });
});
