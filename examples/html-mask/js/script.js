let mask = document.querySelector(".mask");
let overlay = document.querySelector(".mask__overlay");

mask.addEventListener("mousemove", function (e) {
  // Mouse position relative to the section
  let rect = mask.getBoundingClientRect(); // Get the bounding rectangle of the mask element
  overlay.style.setProperty("--x", e.clientX - rect.left + "px");
  overlay.style.setProperty("--y", e.clientY - rect.top + "px");
});

mask.addEventListener("mouseleave", function () {
  // Move the hole outside the section
  overlay.style.setProperty("--x", "-1000px");
  overlay.style.setProperty("--y", "-1000px");
});
