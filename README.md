# @lookupdaily styles

This repository and package contain a set of styles that Liz Daly uses across her personal projects. It is built with sass.

## Install

```bash
npm i @lookupdaily/styles
```

If your project uses sass you can import all styles using

```scss
@import "@lookupdaily/styles";
```

Or individual modules

```scss
@import "lookupdaily/styles/colour";
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

```scss
@use "lookupdaily/styles/src as ld;

.my-text {
  @include ld.text("body");
}

// Or alternatively
.my-text-2 {
  @include ld.font-family("body");
  @include ld.font-size("regular");
}

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
