import test from "node:test";
import assert from "node:assert/strict";
import { items } from "../src/items.mjs";
import { inStock } from "../src/stock/in-stock.mjs";

test("TASK-001-AC1: inStock(items) returns only the Widget", () => {
  assert.deepEqual(inStock(items), [
    { sku: "A1", name: "Widget", qty: 3, price: 2.5 },
  ]);
});

test("TASK-001-AC2: inStock([]) returns []", () => {
  assert.deepEqual(inStock([]), []);
});

test("inStock preserves input order", () => {
  const list = [
    { sku: "C", qty: 1 },
    { sku: "D", qty: 0 },
    { sku: "E", qty: 5 },
  ];
  assert.deepEqual(inStock(list).map((i) => i.sku), ["C", "E"]);
});
