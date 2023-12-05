import { describe, expect, test } from "vitest";
import getRandomNumber from "../getRandomNumber";

describe("getRandomNumber", () => {
  test("随机数在两数之间（正整数）", () => {
    const min = 1;
    const max = 100;
    const result = getRandomNumber(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test("随机数在两数之间（负整数和0）", () => {
    const min = -100;
    const max = 0;

    const result = getRandomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
