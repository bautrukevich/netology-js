type Base = string | number | boolean | null | undefined | Element | Element[];

/**
 * Parse string to HTMLCollection
 * @param innerHTML
 */
function parseHTML(innerHTML: string): HTMLCollection {
  const tmp = document.implementation.createHTMLDocument();

  tmp.body.innerHTML = innerHTML;

  return tmp.body.children;
}

/**
 * Convert to string.
 * @param base
 */
function toString(base: Base): string {
  if (base instanceof Element) {
    return base.outerHTML;
  }

  if (Array.isArray(base)) {
    return base.map((element) => element.outerHTML).join('');
  }

  return String(base);
}

/**
 * Get Element from html literal.
 * @param parts
 * @param insertions
 */
export function html(parts: TemplateStringsArray, ...insertions: Base[]): Element {
  return parseHTML(
    parts.map((part, i) => part.concat(toString(insertions[i]))).join(''),
  )[0];
}
