import { getOrThrowIfNull } from "./getOrThrowIfNull";

export function getElement<T extends Element>(
  parent: HTMLElement,
  id: string,
): T {
  const element = parent.querySelector(`#${id}`);

  return getOrThrowIfNull(element, `element with id: ${id} not found.`) as T;
}
