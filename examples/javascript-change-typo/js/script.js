let text = document.querySelector(".typo");

let arrayTypographies = ["Fira Sans", "Imperial Script", "Mark Script", "Yuyu"];

setInterval(() => {
  let randomTypography = Math.floor(Math.random() * 4);
  text.style.fontFamily = arrayTypographies[randomTypography];
}, 1000);
