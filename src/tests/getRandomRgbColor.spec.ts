import { describe, expect, test } from "vitest";
import getRandomRgbColor from "../utils/getRandomRgbColor";

describe("getRandomRgbColor function", () => {
  test("符合 rgb color 格式", () => {
    const reg =
      /^rgb\((\d|[1-9]\d|1\d{2}|2([0-4]\d|5[0-5]))\,\s([1-9]|[1-9]\d|1\d{2}|2([0-4]\d|5[0-5]))\,\s([1-9]|[1-9]\d|1\d{2}|2([0-4]\d|5[0-5]))\)$/;
    for (let i = 0; i < 100; i++) {
      const result = getRandomRgbColor();
      expect(result).toMatch(reg);
    }
  });
});
