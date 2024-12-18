const pictures = document.querySelectorAll(".gallery__item");

pictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    pictures.forEach((pic) => pic.classList.add("away"));
    picture.classList.remove("away");
    picture.classList.toggle("active");
  });
});
