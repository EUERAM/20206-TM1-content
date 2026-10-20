/* Generate random background color on body */
let body = document.querySelector("body");
let input = document.querySelector(".input");

function writeText() {
  let text = input.value;
  document.querySelector(".text").innerHTML = text;
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = "rgb(" + red + "," + green + "," + blue + ")";

  body.style.backgroundColor = color;
}

function changeCol(e) {
  console.log("change columns", e);
  document.querySelectorAll(".col").forEach((c) => {
    c.style.width = "25%";
  });
  e.target.style.width = "50%";
}
