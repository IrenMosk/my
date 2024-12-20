document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".track-section");

  sections.forEach((section) => {
    // Получаем значение threshold из атрибута data-threshold или задаем значение по умолчанию
    const thresholdValue =
      parseFloat(section.getAttribute("data-threshold")) || 0.3;

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
