let dino = document.querySelector(".dino");
let speed = 5;

document.addEventListener("keydown", (e) => {
  //console.log("Pressing", e);
  let position = window.getComputedStyle(dino);
  // console.log(parseInt(position.left));
  dino.style.animationPlayState = "running";
  if (e.code == "ArrowRight") {
    // console.log("ves a la dreta");
    dino.style.left = parseInt(position.left) + speed + "px";
    dino.style.transform = "scale(1, 1)";
  } else if (e.code == "ArrowLeft") {
    // console.log("ves a la esquerra");
    dino.style.left = parseInt(position.left) - speed + "px";
    dino.style.transform = "scale(-1, 1)";
  }
});

document.addEventListener("keyup", (e) => {
  console.log("Upping", e);
  dino.style.animationPlayState = "paused";
});
