import test from "node:test";
import assert from "node:assert/strict";
import { items } from "../src/items.mjs";

test("seed items", () => assert.equal(items.length, 2));
