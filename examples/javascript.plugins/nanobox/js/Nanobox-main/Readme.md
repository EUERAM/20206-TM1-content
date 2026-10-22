# NanoBox

A zero-dependency lightbox library for images, YouTube/Vimeo video, iframes, and inline HTML content. No jQuery, no build step — drop in two files and go.

## Features

- **Images** — natural CSS sizing, clean centered card, no black bars
- **YouTube & Vimeo** — auto-detects URLs, converts to embed, 16:9 ratio
- **iframes** — any URL in a responsive 16:9 container
- **Inline HTML** — clones any `#id` element from the page into a modal
- **Auto-detection** — content type inferred from the URL, no config needed
- **Scroll lock** — page scroll locked while lightbox is open
- **Accessible** — `role="dialog"`, `aria-modal`, focus trap, ESC to close
- **Animated** — smooth fade + scale transition in/out
- **UMD module** — works as a plain `<script>`, CommonJS `require()`, or AMD

## File sizes

| File           | Raw     | Gzip    |
| -------------- | ------- | ------- |
| `nanobox.js`  | ~8 KB   | ~3.2 KB |
| `nanobox.css` | ~4.5 KB | ~1.6 KB |

## Installation

### CDN / direct download

Download `nanobox.js` and `nanobox.css` and include them in your page:

```html
<link rel="stylesheet" href="nanobox.css" />
<script src="nanobox.js"></script>
```

## Quick start

Add `data-nanobox` to any link or element. NanoBox auto-detects the content type from the `href`, `data-src`, or `src` attribute.

```html
<!-- Image -->
<a href="photo.jpg" data-nanobox>Open photo</a>

<!-- YouTube -->
<a href="https://www.youtube.com/watch?v=VIDEO_ID" data-nanobox>Watch video</a>

<!-- Vimeo -->
<a href="https://vimeo.com/VIDEO_ID" data-nanobox>Watch video</a>

<!-- Any iframe -->
<a href="https://example.com/embed" data-nanobox>Open embed</a>

<!-- Inline HTML from the page -->
<a href="#my-modal" data-nanobox>Open modal</a>
<div id="my-modal" style="display:none">
  <h2>Hello</h2>
  <p>This content is cloned into the lightbox.</p>
</div>

<!-- Works on non-anchor elements too -->
<button data-src="photo.jpg" data-nanobox>Open photo</button>
```

Then initialise once:

```js
NanoBox.init();
```

## Supported URL formats

| Type    | Examples                                                           |
| ------- | ------------------------------------------------------------------ |
| Image   | `.jpg` `.jpeg` `.png` `.gif` `.webp` `.svg` `.avif`                |
| YouTube | `youtube.com/watch?v=ID` · `youtu.be/ID` · `youtube.com/shorts/ID` |
| Vimeo   | `vimeo.com/ID`                                                     |
| iframe  | Any `http://` or `https://` URL not matched above                  |
| Inline  | Any string starting with `#`                                       |

> **YouTube note:** The video owner must have embedding enabled in YouTube Studio. If you see Error 153, the video owner has disabled embedding for that video — this cannot be worked around via URL parameters.

## JavaScript API

### `NanoBox.init(options?)`

Initialises the singleton instance and attaches the delegated click listener. Call once on page load.

```js
NanoBox.init({
  animationDuration: 280, // ms — transition duration
  closeOnOverlayClick: true, // click outside box to close
  escToClose: true, // ESC key closes
  scrollLock: true, // lock body scroll while open
  showSpinner: true, // loading spinner
  onOpen: (lb) => {}, // callback — lightbox opened
  onClose: (lb) => {}, // callback — lightbox closed
  onReady: (lb, el) => {}, // callback — content loaded (img / iframe / clone)
});
```

### `NanoBox.open(src, options?)`

Opens the lightbox programmatically. Per-call options override the defaults.

```js
NanoBox.open("photo.jpg");
NanoBox.open("https://www.youtube.com/watch?v=VIDEO_ID");
NanoBox.open("#my-modal");
NanoBox.open("photo.jpg", { onReady: (lb, img) => console.log("loaded", img) });
```

### `NanoBox.close()`

Closes the lightbox.

```js
NanoBox.close();
```

### `NanoBox.destroy()`

Closes the lightbox and removes all event listeners. Use when tearing down a SPA route.

```js
NanoBox.destroy();
```

### `NanoBox.create(options?)`

Creates and returns an independent lightbox instance. Useful when you need multiple independent lightboxes on the same page.

```js
const galleryLB = NanoBox.create({ escToClose: false });
galleryLB.open("photo.jpg");

const videoLB = NanoBox.create({ closeOnOverlayClick: false });
videoLB.open("https://www.youtube.com/watch?v=VIDEO_ID");
```

## Options reference

| Option                | Type             | Default | Description                                                     |
| --------------------- | ---------------- | ------- | --------------------------------------------------------------- |
| `animationDuration`   | `number`         | `280`   | Fade/scale transition duration in milliseconds                  |
| `closeOnOverlayClick` | `boolean`        | `true`  | Click the dark backdrop to close                                |
| `escToClose`          | `boolean`        | `true`  | Press ESC to close                                              |
| `scrollLock`          | `boolean`        | `true`  | Lock body scroll while open                                     |
| `showSpinner`         | `boolean`        | `true`  | Show loading spinner before content appears                     |
| `onOpen`              | `function\|null` | `null`  | Called when lightbox opens. Receives the instance.              |
| `onClose`             | `function\|null` | `null`  | Called after lightbox closes. Receives the instance.            |
| `onReady`             | `function\|null` | `null`  | Called when content has loaded. Receives `(instance, element)`. |

## CSS custom properties

Override these in your own CSS to theme NanoBox without editing the source:

```css
:root {
  --nb-z: 9999; /* z-index base */
  --nb-dur: 280ms; /* animation duration */
  --nb-ease: cubic-bezier(0.4, 0, 0.2, 1); /* animation easing */
  --nb-r: 8px; /* border radius */
  --nb-shadow: 0 16px 60px rgba(0, 0, 0, 0.8); /* box shadow */
  --nb-overlay: rgba(6, 6, 10, 0.92); /* overlay background */
}
```

## DOM structure

NanoBox injects and removes its DOM on every open/close — zero footprint when closed.

```
.nb-overlay          ← dark backdrop
.nb-wrap             ← fullscreen flex centering layer
  .nb-box            ← the floating card
    button.nb-close  ← × button
    div.nb-spin      ← loading spinner
    div.nb-img-wrap  ← image content (type: image)
    div.nb-vid-wrap  ← video content (type: youtube / vimeo / iframe)
    div.nb-inline-wrap ← inline content (type: inline)
```

## Accessibility

- Overlay element uses `role="dialog"` and `aria-modal="true"`
- Focus moves into the lightbox on open and returns to the trigger element on close
- Tab key is trapped inside the open dialog
- ESC key closes (configurable)
- Spinner marked `aria-hidden="true"`
- Respects `prefers-reduced-motion` — transitions reduced to 1ms

## Browser support

All modern browsers (Chrome, Firefox, Safari, Edge). No IE11 support — uses ES6 classes, `inset`, `min()`, and optional chaining.

## License

MIT
