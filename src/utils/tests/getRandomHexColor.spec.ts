import { describe, expect, test } from "vitest";
import getRandomHexColor from "../getRandomHexColor";

describe("getRandomHexColor function", () => {
  test("符合 hexColor 格式", () => {
    expect(getRandomHexColor()).toMatch(/^\#[0-9ABCDEF]{6}$/);
  });

  test("多次结果不一样", () => {
    const result1 = getRandomHexColor();
    const result2 = getRandomHexColor();
    const result3 = getRandomHexColor();

    expect(result1).not.toBe(result2);
    expect(result1).not.toBe(result3);
  });
});
