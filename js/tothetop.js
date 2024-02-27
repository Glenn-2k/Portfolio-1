export function getToTop() {
  const upArrow = document.getElementById("toTheTop");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      upArrow.style.display = "block";
    } else {
      upArrow.style.display = "none";
    }
  }

  upArrow.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
