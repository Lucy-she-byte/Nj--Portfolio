// Wait until the webpage has finished loading
document.addEventListener("DOMContentLoaded", function () {
  // Add a smooth effect when navigation links are clicked
  const navigationLinks = document.querySelectorAll("nav a");

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      link.style.opacity = "0.6";
    });
  });

  // Add a small welcome message in the browser console
  console.log("Welcome to Lucy's student portfolio! 🌿");

  // Add a simple animation to sections when they appear
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
});
