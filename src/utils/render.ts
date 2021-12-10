/**
 * Render Element to DOM.
 * @param element
 * @param parentElement
 */
export function render(element: Element, parentElement: Element): void {
  parentElement.replaceChildren(element);
}
