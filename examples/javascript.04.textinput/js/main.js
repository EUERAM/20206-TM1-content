var inputText = document.querySelector("input");
var title = document.querySelector(".text");

function sendText() {
  var text = inputText.value;
  console.log(text);
  title.innerHTML =
    text; /* innerHTML is a property to change content of the element */
}
