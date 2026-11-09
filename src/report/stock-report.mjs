import { inStock } from "../stock/in-stock.mjs";
import { formatPrice } from "../money/format-price.mjs";

/**
 * Build report lines "<name>: <qty> @ <price>" for in-stock items only.
 * @param {Array<{name: string, qty: number, price: number}>} items
 * @returns {string[]}
 */
export function stockReport(items) {
  return inStock(items).map(
    (item) => `${item.name}: ${item.qty} @ ${formatPrice(item.price)}`,
  );
}
