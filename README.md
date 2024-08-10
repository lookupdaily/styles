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
| Primary         | --ld-colour-primary         | ld-colour-primary         | ld-background-primary         |
| Primary-dark    | --ld-colour-primary-dark    | ld-colour-primary-dark    | ld-background-primary-dark    |
| Primary-light   | --ld-colour-primary-light   | ld-colour-primary-light   | ld-background-primary-light   |
| Secondary       | --ld-colour-secondary       | ld-colour-secondary       | ld-background-secondary       |
| Secondary-dark  | --ld-colour-secondary-dark  | ld-colour-secondary-dark  | ld-background-secondary-dark  |
| Secondary-light | --ld-colour-secondary-light | ld-colour-secondary-light | ld-background-secondary-light |
| Grey            | --ld-colour-grey            | ld-colour-grey            | ld-background-grey            |

Background colour classes are setup with a recommended font colour - e.g. when using a primary coloured background you should use a white font colour.

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
