function callback(records) {
  records.forEach((record) => {
    const video = record.target;
    if (record.isIntersecting) {
      video.style.opacity = "1";
      video.play();
    } else {
      video.style.opacity = "0";
      video.pause();
    }
  });
}

function initializeObserver() {
  if (window.innerWidth < 768) {
    const observer = new IntersectionObserver(callback, { threshold: 0.75 });
    const videos = document.querySelectorAll(".observe-video"); // Находим видео с классом `observe-video`

    // Наблюдаем за каждым видео с указанным классом
    videos.forEach((video) => observer.observe(video));

    return observer;
  }
  return null;
}

// Инициализация наблюдателя при загрузке
let currentObserver = initializeObserver();

// Обновляем наблюдатель при изменении размера окна
window.addEventListener("resize", () => {
  if (currentObserver) {
    currentObserver.disconnect();
    currentObserver = null;
  }

  currentObserver = initializeObserver();
});
