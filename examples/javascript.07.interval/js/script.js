console.log("Hello, World!"); /* to show messages in the console */
// other comment

//selecting elements
var bodyElement = document.querySelector("body");

//changing the background color each 5 seconds
setInterval(changeColor, 2000);

function changeColor() {
  // create random number for rgb
  var red = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);

  console.log(red, blue, green);

  //changing the background color
  bodyElement.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";

  //  "rgb("+red+"," +green+  ",100)"
}
