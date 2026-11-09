import test from "node:test";
import assert from "node:assert/strict";
import { formatPrice } from "../src/money/format-price.mjs";

test("TASK-002-AC1: formatPrice(2.5) returns $2.50", () => {
  assert.equal(formatPrice(2.5), "$2.50");
});

test("TASK-002-AC2: formatPrice(10) returns $10.00", () => {
  assert.equal(formatPrice(10), "$10.00");
});
