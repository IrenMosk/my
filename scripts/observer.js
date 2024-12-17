document.addEventListener("DOMContentLoaded", () => {
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
      threshold: 0.1,
    }
  );

  const sections = document.querySelectorAll(".track-section");
  sections.forEach((section) => observer.observe(section));
});
