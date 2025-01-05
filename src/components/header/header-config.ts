export interface HeaderConfig {
	moduleName: string;
	buttonId: string;
	menuId: string;
	expandedClassName: string;
}

export const defaultConfig: HeaderConfig = {
	moduleName: "ld-header",
	buttonId: "ld-menu-button",
	menuId: "ld-menu",
	expandedClassName: "expanded",
};
