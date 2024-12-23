document.addEventListener("DOMContentLoaded", () => {
  const parent = document.querySelector(".gallery__list");

  if (parent) {
    // Получаем всех дочерних элементов
    const children = parent.children;

    // Преобразуем HTMLCollection в массив и добавляем класс всем элементам
    Array.from(children).forEach((child) => {
      child.classList.add("track-section");
    });
  }
  const sections = document.querySelectorAll(".track-section");

  sections.forEach((section) => {
    const thresholdValue =
      parseFloat(section.getAttribute("data-threshold")) || 1;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in-view", "true");
          } else {
            entry.target.setAttribute("data-in-view", "false");
          }
        });
      },
      {
        root: null,
        threshold: thresholdValue,
      }
    );

    observer.observe(section);
  });
});
