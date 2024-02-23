export function cardflip() {
  document.querySelectorAll(".flipProjects").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("isFlipped");
    });
  });
}
