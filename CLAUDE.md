# Multimedia Technologies I — course content

Teaching material for *Multimedia Technologies I* (ERAM School of Arts): a home page that links to several learning guides, plus small code examples and exercises.

```
index.html            Home page: cards linking to every guide (uses css/style.css + figma-guide/css/style.css)
figma-guide/          Reference guide: its css/style.css is the SHARED stylesheet for all guides
ux-guide/  js-guide/  html-css-guide/  electronics-guide/  arduino-guide/
examples/  exercices/ Small standalone HTML/CSS/JS examples (each has its own README.md)
```

Guides are static HTML: no build step, no framework, no JavaScript. Open `index.html` in a browser to check them.

---

## Style guide

### The shared stylesheet

Every guide links **`../figma-guide/css/style.css`**. Do not create per-guide stylesheets or `<style>` blocks; reuse the existing classes below.

The file has two layers. The first ~830 lines are an older base theme. From the second `:root` onwards (around line 829) an override layer sets the theme that is actually shown. When you need a new rule, **append it at the end of the file** under a comment such as `/* Data tables (used by the tangible interaction guides) */`, and scope it to a new class so existing guides are not affected.

### Design tokens (active theme)

| Token | Value | Use |
| --- | --- | --- |
| `--primary` | `#4f46e5` (indigo) | Sidebar background, `h2`, eyebrows, links, numbers in lists |
| `--accent` | `#f97316` (orange) | Note border, highlights in illustrations |
| `--bg` | `#f5f6fa` | Page background |
| `--dark` | `#1f2937` | Headings, strong text |
| Body text | `#374151` / `#4b5563` | Paragraphs, card text |
| Muted | `#6b7280` | Hero copy, captions |
| Card surface | `#f8fafc`, border `#e5e7eb` | `info-card`, `compare-card`, `tree`, `checklist` |
| Note | `#fef9c3` background, orange left border | `.note` |
| Code | inline `#eef2ff` / `#3730a3`; blocks `#111827` | `code`, `pre` |

- **Fonts:** Poppins (400, 600) for everything; Pacifico only for the second word of the sidebar title (`<span>Guide</span>`).
- **Surfaces:** each `.lesson` is a white card with 12px radius and a soft shadow. Inner cards use 8px radius.
- **Icons:** Font Awesome 6.5.2 from cdnjs (`fa-solid …`).

### Writing conventions

- Guides are written in **English** (UK spelling: colour, centre). Course schedules may come in Catalan; translate them.
- Address the student as “you”, short sentences, practical tone. Explain *why*, then *how*.
- Headings are sentence case. `h2` is the section title; `h3.subheading` for sub-parts inside a section.
- Use `<strong>` for key terms the first time they appear, `<code>` for anything typed (pins, functions, values, file names).
- Escape code inside `<pre><code>`: `&lt;`, `&gt;`, `&amp;`.
- External links: `target="_blank" rel="noopener noreferrer"`.
- Guides are references, not exercise sheets: no assessed challenges or project briefs unless asked.

### Images

- Store images in the guide's own `img/` folder with **descriptive kebab-case names** (`relay-module.jpg`, not `71E36bxHWRL.jpg`). Convert `.avif`/odd formats to `.jpg`; resize photos to ~500–900px (`sips -Z 600 in --out out.jpg`).
- **Images must be small.** Use `figure.interface-figure.figure-small` (max 380px). Component photos inside cards use `img.card-thumb` (110px high).
- **Text + image in the same section → two columns** with `.split` (text left, image right; one column below 800px). Never place a big image full-width on its own.
- Every `img` has `alt` describing what is shown, `width`/`height` attributes, and `loading="lazy"`. Every figure has a short `figcaption`.
- Original diagrams are standalone SVG files in `img/` (`viewBox="0 0 560 260"`, `role="img"`, `<title>` + `<desc>`) using the theme colours.
- Do not use screenshots of code: retype the code in `<pre><code>`.

---

## HTML structure of a guide

### Page skeleton

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="One sentence describing the guide." />
    <title>Topic Guide — Multimedia Technologies I</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Pacifico&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    />
    <link rel="stylesheet" href="../figma-guide/css/style.css" />
  </head>
  <body>
    <a class="skip-link" href="#content">Skip to guide</a>
    <input type="checkbox" id="menu-toggle" class="menu-checkbox" aria-label="Show or hide the menu" />
    <label for="menu-toggle" class="menu-btn" title="Show / hide menu">
      <i class="fa-solid fa-bars"></i>
    </label>
    <label for="menu-toggle" class="menu-backdrop"></label>
    <div class="layout">
      <aside class="sidebar" aria-label="Guide contents">
        <h1 class="sidebar-title">Topic <span>Guide</span></h1>
        <p class="sidebar-context">Digital Interaction<br />Multimedia Technologies</p>
        <p class="sidebar-label">Guide contents</p>
        <nav>
          <h3>1 · Chapter name</h3>
          <a href="#section-id">Section link</a>
          <!-- one h3 per chapter, one a per section -->
        </nav>
        <p class="sidebar-note">One helpful sentence (often a link to the related guide).</p>
      </aside>

      <div class="content">
        <main id="content">
          <section class="hero">
            <p class="eyebrow">Digital interaction</p>
            <h1>Main statement <span>highlighted ending.</span></h1>
            <p class="hero-copy">Two lines on what the student will learn.</p>
          </section>

          <!-- lessons -->

          <footer class="guide-footer">
            <span>Multimedia Technologies I · ERam School of Arts</span>
          </footer>
        </main>
      </div>
    </div>
  </body>
</html>
```

The mobile menu works with the checkbox + labels only (no JS). Keep those four elements exactly as above. `sidebar-context` is “Digital Interaction” or “Tangible Interaction” depending on the module.

### Lessons and numbering

```html
<!-- ====================================== -->
<!-- Chapter 2 — Chapter name               -->
<!-- ====================================== -->

<section class="lesson" id="kebab-case-id">
  <p class="eyebrow">Chapter 2 · Chapter name · 2.1</p>   <!-- first section of a chapter -->
  <h2>Section title</h2>
  …
</section>

<section class="lesson" id="next-id">
  <p class="eyebrow">2.2 · Chapter name</p>                <!-- following sections -->
  <h2>Section title</h2>
</section>
```

- One `<section class="lesson">` per sidebar link; its `id` matches the `href`.
- Chapters start at 1 in every guide. Mark chapter starts with the banner comment above.
- Component chapters follow **concept → component → wiring → code → tips**.

### Component catalogue

| Need | Markup |
| --- | --- |
| Text + image | `<div class="split"><div class="split-text">…p/ul…</div><div class="split-media"><figure class="interface-figure figure-small">…</figure></div></div>` |
| Comparing two things visually (e.g. two boards) | `<div class="image-compare"><figure class="compare-figure"><img …/><figcaption>Name <span>key facts</span></figcaption></figure><span class="image-compare-vs" aria-hidden="true">vs</span><figure class="compare-figure">…</figure></div>` — use instead of `.split` |
| Small figure | `<figure class="interface-figure figure-small"><img …/><figcaption>…</figcaption></figure>` |
| Grid of cards | `<div class="workspace-grid"><article class="info-card"><img class="card-thumb" …/>(optional)<h3>…</h3><p>…</p></article>…</div>` |
| Two-way comparison | `<div class="compare-grid"><article class="compare-card"><h3>…</h3><p>…</p><p class="example">Think: …</p></article>×2</div>` |
| Numbered steps | A table, not `div.steps`: `<div class="table-wrap"><table class="data-table"><tr><th>Step</th><th>Action</th></tr><tr><td>1</td><td>…</td></tr></table></div>` (add a bold “Action” column + “How” column when each step has a short name) |
| Numbered concepts | `<div class="system-list"><article><span>01</span><div><h3>…</h3><p>…</p></div></article>…</div>` |
| Checklist | `<ul class="checklist"><li>…</li></ul>` (green ticks) |
| Tip / warning | `<p class="note"><strong>Tip:</strong> …</p>` |
| Table | `<div class="table-wrap"><table class="data-table"><tr><th>…</th></tr><tr><td>…</td></tr></table></div>` |
| Code | `<pre><code>…escaped code…</code></pre>` |
| File / layer tree | `<div class="tree"><div>Frame <span>Name</span></div><div class="tree-child">…</div><div class="tree-grandchild">…</div></div>` |
| Sub-heading | `<h3 class="subheading">…</h3>` |
| Text + illustration card (Figma guide style) | `<section class="lesson ui-recipe"><div class="recipe-copy">…<p class="recipe-example">…</p></div><figure class="recipe-figure">…</figure></section>` |

Prefer `.split` over `ui-recipe` / `image-text-grid` in new guides.

---

## Adding or changing a guide

1. Create `topic-guide/index.html` from the skeleton and `topic-guide/img/`.
2. Add or update its card in the root `index.html` (`guide-card guide-card-available`, numbered `card-number`, `status-available`, `card-link` to `topic-guide/index.html`). Upcoming guides use `guide-card-upcoming` with “Coming soon”.
3. Cross-link related guides with relative paths (`../arduino-guide/index.html#section-id`).
4. Check before finishing:
   - every `href="#id"` and cross-guide anchor exists;
   - every `img/…` file exists and no file in `img/` is unused;
   - `<section>` and `<div>` tags are balanced;
   - no unescaped `<` inside `<pre><code>`.
