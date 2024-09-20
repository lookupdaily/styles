/**
 * @jest-environment jsdom
 */

import { getModule } from "./getModule";

describe("getModule", () => {
  afterEach(() => {
    document.body.innerHTML = "";

    jest.resetModules();
  });

  it("finds the module", () => {
    const moduleName = "test";
    const elementText = "my div";

    const parent = document.createElement("div");
    parent.innerHTML = `<div data-module="${moduleName}">${elementText}</div><button>a button</button>`;
    document.body.appendChild(parent);

    const result = getModule(document, moduleName);
    expect(result.innerHTML).toBe(elementText);
  });

  it("throws an error if not found", () => {
    const moduleName = "test";
    const act = () => getModule(document, moduleName);
    expect(act).toThrow(`element with data-module: ${moduleName} not found.`);
  });
});
