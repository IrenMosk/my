document.addEventListener("DOMContentLoaded", () => {
  const portfolioLinks = document.querySelectorAll(".fullscreen-video");

  portfolioLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Отменяем переход по ссылке
      const video = link.querySelector("video");

      if (video.requestFullscreen) {
        video.requestFullscreen(); // Открываем видео в полноэкранном режиме
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Для Safari
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Для Firefox
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // Для Internet Explorer/Edge
      }
    });
  });
});
