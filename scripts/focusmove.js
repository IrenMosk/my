function callback(records) {
  records.forEach((record) => {
    const video = record.target;

    // Убедимся, что событие canplaythrough обрабатывается корректно
    if (record.isIntersecting) {
      video.setAttribute("data-visible", "true");

      // Если видео готово для воспроизведения, запускаем
      if (video.readyState >= 4) {
        // readyState 4: VIDEO_HAVE_ENOUGH_DATA
        video.play();
      } else {
        // Добавляем обработчик canplaythrough на случай, если видео еще загружается
        const playWhenReady = () => {
          video.play();
          video.removeEventListener("canplaythrough", playWhenReady);
        };
        video.addEventListener("canplaythrough", playWhenReady);
      }
    } else {
      video.setAttribute("data-visible", "false");
      video.pause();
    }
  });
}

function initializeObserver() {
  const videos = document.querySelectorAll(".observe-video");
  const observer = new IntersectionObserver(callback, { threshold: 0.35 });

  videos.forEach((video) => {
    observer.observe(video);

    // Убедимся, что видео загружается, даже если оно не в области видимости
    video.load();
  });

  return observer;
}

let currentObserver = initializeObserver();

function updateObserver() {
  if (currentObserver) {
    currentObserver.disconnect();
    currentObserver = null;
  }

  currentObserver = initializeObserver();
}

window.addEventListener("resize", updateObserver);
