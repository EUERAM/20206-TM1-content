// this is a comment in JavaScript
/* this is a multi-line comment in JavaScript
    It can span multiple lines 
*/

//VARIABLES!
// `document.querySelector` is a method that allows you to select an element from the DOM using a CSS selector. In this case, we are selecting the 'body' element and changing its background color to 'lightblue'.
let body = document.querySelector("body");
let button = document.querySelector(".btn");
let toy = document.querySelector(".toy");

let palette = ["lightblue", "lightcoral", "lightgreen", "lightyellow"];
let counter = 0; // nummber variable

console.log(palette[2]); // This will log "lightgreen" to the console, which is the third color in the palette array.

// `style` allows you to change the CSS properties of an element.
// In this case, we are changing the background color of the 'body' element to 'lightblue'.
body.style.backgroundColor = "lightblue";

//events
button.addEventListener("click", function () {
  toy.classList.add("animated"); // `animation` is a CSS property that allows you to animate an element. In this case, we are applying the 'moveToy' animation to the 'toy' element when the button is clicked.

  setTimeout(function () {
    toy.classList.remove("animated"); // `setTimeout` is a method that allows you to delay the execution of a function. In this case, we are removing the 'moveToy' animation from the 'toy' element after 1 second (1000 milliseconds).
  }, 2000);

  // `Math.random()` generates a random number between 0 (inclusive) and 1 (exclusive).
  // `Math.floor()` rounds a number down to the nearest integer.
  // In this case, we are generating a random number between 0 and 3 (inclusive) to use as an index for the palette array.
  //let randomNumber = Math.floor(Math.random() * 4);
  //debugger;
  console.log(counter); // to check the counter
  body.style.backgroundColor = palette[counter];
  // `counter` is incremented by 1 each time the button is clicked.
  counter = counter + 1;
  // `if` statement checks if the counter is greater than 3. If it is, we reset the counter to 0 so that it loops back to the first color in the palette array.
  if (counter > 3) {
    counter = 0;
  }
});
