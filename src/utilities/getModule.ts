import { getOrThrowIfNull } from "./getOrThrowIfNull";

export function getModule(parent: Document, moduleName: string): HTMLElement {
  const element = parent.querySelector(`[data-module="${moduleName}"]`);

  return getOrThrowIfNull(
    element,
    `element with data-module: ${moduleName} not found.`,
  ) as HTMLElement;
}
