/**
 * Return only items with qty > 0, preserving input order.
 * @param {Array<{qty: number}>} items
 * @returns {Array<{qty: number}>}
 */
export function inStock(items) {
  return items.filter((item) => item.qty > 0);
}
