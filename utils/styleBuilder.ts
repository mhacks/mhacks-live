// Original author: Cooper Saye

/**
 * returns class name built with given style data
 * @param styles array of element type string or [string, boolean]
 * @returns string concatenation of classNames based on conditionals
 * @example styleBuilder(["a", "b"]) -> "a b"
 * @example styleBuilder(["a", ["b", condition]]) -> "a b" if condition else "a"
 */
export default function styleBuilder(styles: Array<string | [string, boolean]>) {
  const usedStyles = []
  for (const style of styles) {
    if (!style) continue
    if (typeof style === 'string') usedStyles.push(style)
    else if (style[1]) usedStyles.push(style[0])
  }
  return usedStyles.join(' ') || undefined
}
