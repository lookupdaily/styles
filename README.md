# @lookupdaily styles

This repository and package contain a set of styles that Liz Daly uses across her personal projects. It is built with sass.

- [@lookupdaily styles](#lookupdaily-styles)
  - [Install](#install)
  - [Styles](#styles)
    - [Colour](#colour)
    - [Typography](#typography)
      - [Content types](#content-types)
      - [Sizes](#sizes)
  - [Components](#components)
    - [Header](#header)
    - [Footer](#footer)
  - [Local development](#local-development)
    - [Requirements](#requirements)
    - [Getting started](#getting-started)

## Install

```bash
npm i @lookupdaily/styles
```

You can import the css file into your stylesheet

```css
@import "@lookupdaily/styles";
```

If your project uses sass you can import all styles, or individual modules

```scss
/* Import all scss modules */
@use "@lookupdaily/styles/scss";

/* Or the compiled css */
@use "@lookupdaily/styles";

/* Import individual scss modules */
@use "lookupdaily/styles/scss/components/links";

/* Import all scss modules and use mixins */
@use "lookupdaily/styles/scss" as ld;

.component {
  @include ld.padding-top("small");
}
```

## Styles

### Colour

Colours are available via global css-variables or utility classes

| colour          | variable                    | font colour class         | background colour class       |
| --------------- | --------------------------- | ------------------------- | ----------------------------- |
| primary         | --ld-colour-primary         | ld-colour-primary         | ld-background-primary         |
| primary-dark    | --ld-colour-primary-dark    | ld-colour-primary-dark    | ld-background-primary-dark    |
| primary-light   | --ld-colour-primary-light   | ld-colour-primary-light   | ld-background-primary-light   |
| Secondary       | --ld-colour-secondary       | ld-colour-secondary       | ld-background-secondary       |
| secondary-dark  | --ld-colour-secondary-dark  | ld-colour-secondary-dark  | ld-background-secondary-dark  |
| secondary-light | --ld-colour-secondary-light | ld-colour-secondary-light | ld-background-secondary-light |
| grey            | --ld-colour-grey            | ld-colour-grey            | ld-background-grey            |

Background colour classes are setup with a recommended font colour - e.g. when using a primary coloured background you should use a white font colour.

Alternatively use a mixin to include a colour or background colour settings in a custom class. The parameter value should be one of the colour names listed above (lowercase).

```scss
@use "lookupdaily/styles/src as ld;

.my-text {
  @include ld.colour("primary");
}

.my-container {
  @include ld.background-colour("secondary-light");
}
```

### Typography

#### Content types

| Name     | Variables          | Classes          |
| -------- | ------------------ | ---------------- |
| body     | --ld-font-body     | ld-text-body     |
| title    | --ld-font-title    | ld-text-title    |
| subtitle | --ld-font-subtitle | ld-text-subtitle |
| logo     | --ld-font-logo     | ld-text-logo     |

#### Sizes

| Name     | Size | Variables               | Classes          |
| -------- | ---- | ----------------------- | ---------------- |
| small    | 16px | --ld-font-size-small    | ld-text-small    |
| regular  | 19px | --ld-font-size-regular  | ld-text-regular  |
| large    | 24px | --ld-font-size-large    | ld-text-large    |
| x-large  | 36px | --ld-font-size-x-large  | ld-text-x-large  |
| xx-large | 72px | --ld-font-size-xx-large | ld-text-xx-large |

Alternatively use a mixin to include text, font-family or font-size settings in a custom class. The parameter value for the `text()` or `font-family()` should be one of the content type names listed above, and `font-size()` should be given a size variant (lowercase). You can also pass in your own font map as an optional variable (see `settings/typography`, $fonts for the map structure).

```css
@use "lookupdaily/styles/src as ld;

.my-text {
  @include ld.text("body");
}

/* Or alternatively */
.my-text-2 {
  @include ld.font-family("body");
  @include ld.font-size("regular");
}
```

## Components

### Header 

Should contain a logo or site title and a series of navigational links. These links will be visible in the header on larger screens, and contained in an expandable menu on smaller screens. JavaScript is used for this component, and should be setup in your client-side JavaScript. But there is a fallback for if JavaScript is not enabled in the user's browser.

Active links are styled using the `data-state="active"` attribute.

The header should contain a skip to content link as the first element.

The header should contain no more than 4 links.

Example: 

```html
<header class="ld-header data-module="ld-header">
  <div class="visually-hidden"><a href="#content">Skip to content</a></div>
  <div class="ld-logo"><a href="/" class="ld-logo__link">{ logo }</a></div>
  <span hidden id="menu-label">Main menu</span>
  <button class="ld-header__menu-button" id="ld-menu-button" aria-expanded="false">
    <span class="ld-header__menu-button-text">Menu</span>
  </button>
  <nav class="ld-header-nav" id="ld-menu" aria-labelledby="menu-label">
    <ul class="ld-header-nav__list">
      <li class="ld-header-nav__item">
        <a class="ld-link ld-header-nav__link" href="/" data-state="active">
          <span class="nav__link__text">Home</span>
        </a>
      </li>
    <li class="ld-header-nav__item">
      <a class="ld-link ld-header-nav__link" href="/about"><span class="nav__link__text">About</span></a>
    </li>
    </ul>
  </nav>
</header>
```

Setup in JavaScript:

```javascript
import { Header } from "@lookupdaily/styles/header.js"

document.addEventListener("DOMContentLoaded", () => {
  Header.init();
})
```

The Header component looks for an element with the `data-module` attribute with a value of `ld-header` (`data-module="ld-header"`), so this must be included in the html. You can customize the data-module value and menu and button ids by passing in a custom config:

```javascript
import { Header } from "@lookupdaily/styles/header.js"

const config = {
	moduleName: 'my-module';
	buttonId: 'my-button';
	menuId: 'menu';
	expandedClassName: 'expanded';
}

document.addEventListener("DOMContentLoaded", () => {
  Header.init(config);
})
```

### Footer

Content can be across one or two columns, against secondary colour background. On smaller screens there will always be one column.

For one column, set content directly in the footer class:

```html
<footer class="ld-footer">
  <p>Footer content</p>
</footer>
```

For two, add `__content` class containing two elements only:

```html
<footer class="ld-footer">
  <div class="ld-footer__content">
    <p>
      Left column
    </p>
    <p>
      Right column
    </p>
  </div>
</footer>
```

To align items to the outside edges add `__item` to each element:

```html
<footer class="ld-footer">
  <div class="ld-footer__content">
    <p class="ld-footer__item">
      Left-aligned content
    </p>
    <p class="ld-footer__item">
      Right-aligned content
    </p>
  </div>
</footer>
```

## Local development

The project can be setup using npm

### Requirements

- Npm
- Node.js 20.x

### Getting started

First, install dependencies by opening a terminal and running:

```bash
npm install
```

To build the project as a css file:

```bash
npm build
```
