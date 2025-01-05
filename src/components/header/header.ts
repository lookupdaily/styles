import { getElement } from "../../tools/getElement";
import { getModule } from "../../tools/getModule";
import { type HeaderConfig, defaultConfig } from "./header-config.js";

export class Header {
	private readonly config: HeaderConfig;
	private readonly menu: HTMLElement;
	private readonly menuButton: HTMLElement;
	private focusableEls: HTMLElement[] = [];
	private lastFocusableEl!: HTMLElement;

	constructor(module: HTMLElement, config: HeaderConfig) {
		this.config = config;
		this.menu = getElement(module, config.menuId);
		this.menuButton = getElement(module, config.buttonId);
	}

	init(): void {
		this.menuButton.addEventListener("click", () => this.toggleMenu());
	}

	toggleMenu(): void {
		const isMenuOpen = !this.menu.classList.contains(
			this.config.expandedClassName,
		);
		this.menuButton.setAttribute("aria-expanded", isMenuOpen.toString());
		this.menu.classList.toggle(this.config.expandedClassName);

		if (isMenuOpen) {
			this.focusableEls = Array.from(this.menu.querySelectorAll("a"));
			this.lastFocusableEl =
				this.focusableEls[this.focusableEls.length - 1] ?? this.menuButton;
			document.addEventListener("keydown", (e) => this.setFocusTrap(e));
		} else {
			document.removeEventListener("keydown", (e) => this.setFocusTrap(e));
		}

		this.menuButton.focus();
	}

	setFocusTrap(e: KeyboardEvent): void {
		if (
			e.key === "Tab" &&
			!e.shiftKey &&
			document.activeElement === this.lastFocusableEl
		) {
			e.preventDefault();
			this.toggleMenu();
		}

		if (e.key === "Escape") {
			e.preventDefault();
			this.toggleMenu();
		}
	}

	static init(config: HeaderConfig = defaultConfig): void {
		const headerElement = getModule(document, config.moduleName);
		const header = new Header(headerElement, config);
		header.init();
	}
}
