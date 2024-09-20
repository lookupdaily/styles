/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { getElement } from "./getElement";

describe("getElement", () => {
  it("finds the element", () => {
    const id = "test";
    const elementText = "my div";

    const parent = document.createElement("div");
    parent.innerHTML = `<div id=${id}>${elementText}</div><button>a button</button>`;

    const result = getElement(parent, id);
    expect(result.innerHTML).toBe(elementText);
  });

  it("throws an error if not found", () => {
    const id = "test";
    const parent = document.createElement("div");
    const act = () => getElement(parent, id);
    expect(act).toThrow(`element with id: ${id} not found.`);
  });
});
