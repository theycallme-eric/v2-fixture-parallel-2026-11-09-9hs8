import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { items } from "../src/items.mjs";
import { stockReport } from "../src/report/stock-report.mjs";

test('TASK-003-AC1: stockReport(items) returns ["Widget: 3 @ $2.50"]', () => {
  assert.deepEqual(stockReport(items), ["Widget: 3 @ $2.50"]);
});

test("TASK-003-AC2: stockReport imports inStock and formatPrice rather than reimplementing them", () => {
  const source = readFileSync(
    new URL("../src/report/stock-report.mjs", import.meta.url),
    "utf8",
  );
  assert.match(
    source,
    /import\s*\{\s*inStock\s*\}\s*from\s*["']\.\.\/stock\/in-stock\.mjs["']/,
  );
  assert.match(
    source,
    /import\s*\{\s*formatPrice\s*\}\s*from\s*["']\.\.\/money\/format-price\.mjs["']/,
  );
  assert.doesNotMatch(source, /\bfunction\s+(inStock|formatPrice)\b/);
  assert.doesNotMatch(source, /qty\s*>\s*0/);
  assert.doesNotMatch(source, /toFixed/);
});

test("stockReport([]) returns []", () => {
  assert.deepEqual(stockReport([]), []);
});
