/**
 * Format a numeric amount as a US-dollar string with two decimals, e.g. "$2.50".
 * @param {number} amount
 * @returns {string}
 */
export function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}
