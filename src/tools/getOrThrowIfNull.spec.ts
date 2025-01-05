import { getOrThrowIfNull } from "./getOrThrowIfNull.js";

describe("getElement", () => {
	afterEach(() => {
		document.body.innerHTML = "";

		jest.resetModules();
	});

	it("returns the element if not null", () => {
		const element = document.createElement("div");
		const result = getOrThrowIfNull(element);
		expect(result).toBe(element);
	});

	it("returns as non-nullable type", () => {
		const element: Element | null = document.createElement("div");

		const result = getOrThrowIfNull(element);
		expect(result).toBe(element);
	});

	it("throws if null", () => {
		const act = () => getOrThrowIfNull(null);
		expect(act).toThrow();
	});

	it("takes a custom error message", () => {
		const message = "test error";
		const act = () => getOrThrowIfNull(null, message);
		expect(act).toThrow(message);
	});
});
