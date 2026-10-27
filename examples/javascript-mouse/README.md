# JavaScript — Custom Mouse Cursor

This example shows how to make an element follow the mouse pointer. A black circle (`.cursor`) moves to the pointer's position every time the mouse moves over the page.

## Folder structure

```text
javascript-mouse/
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    └── script.js
```

## Step by step

### 1. Create the HTML

In `index.html`, add an empty `div` with the class `cursor`. This is the element that will follow the mouse. Link the stylesheet in the `<head>` and the script at the end of the `<body>`, so the `div` already exists when the script runs.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <div class="cursor"></div>

    <script src="js/script.js"></script>
  </body>
</html>
```

### 2. Style the cursor

In `css/styles.css`, turn the `div` into a 50 × 50 px black circle. `position: absolute` lets us place it anywhere on the page with `left` and `top`.

```css
.cursor {
  position: absolute;
  background-color: #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
```

### 3. Move it with JavaScript

In `js/script.js`:

1. Select the circle with `document.querySelector(".cursor")`.
2. Listen for the `mousemove` event on the whole `document`.
3. The event object `e` gives the pointer position in `e.pageX` and `e.pageY`. Use them to set the circle's `left` and `top`.
4. Subtract `25` (half the circle's size) so the pointer sits in the **centre** of the circle instead of its top-left corner. Remember to add the `"px"` unit.

```js
let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.pageX - 25 + "px";
  cursor.style.top = e.pageY - 25 + "px";
});
```

### 4. Try it

Open `index.html` in the browser and move the mouse: the circle follows the pointer.

## Ideas to extend it

- Hide the real pointer with `cursor: none;` on `body`.
- Add `pointer-events: none;` to `.cursor` so it never blocks clicks on other elements.
- Add `transition: left 0.1s, top 0.1s;` to make the circle trail behind the pointer.
- Use `position: fixed` with `e.clientX` / `e.clientY` if the page scrolls.
