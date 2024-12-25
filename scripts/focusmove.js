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
  const observer = new IntersectionObserver(callback, { threshold: 0.35 });
  videos.forEach((video) => {
    observer.observe(video);
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
