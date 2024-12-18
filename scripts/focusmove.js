function callback(records) {
  records.forEach((record) => {
    const video = record.target;
    if (record.isIntersecting) {
      video.setAttribute("data-visible", "true");
      video.play();
    } else {
      video.setAttribute("data-visible", "false");
      video.pause();
    }
  });
}

function initializeObserver() {
  const videos = document.querySelectorAll(".observe-video");

  // Создаем наблюдатель только при ширине экрана < 768

  const observer = new IntersectionObserver(callback, { threshold: 0.95 });

  // Настраиваем плавный переход для прозрачности и добавляем наблюдение
  videos.forEach((video) => {
    observer.observe(video);
  });

  return observer;
}

// Инициализация наблюдателя
let currentObserver = initializeObserver();

// Функция для обновления наблюдателя при изменении размера окна
function updateObserver() {
  // Удаляем старый наблюдатель, если он существует
  if (currentObserver) {
    currentObserver.disconnect();
    currentObserver = null;
  }

  // Создаем новый наблюдатель
  currentObserver = initializeObserver();
}

// Обновляем наблюдатель при изменении размера окна
window.addEventListener("resize", updateObserver);
