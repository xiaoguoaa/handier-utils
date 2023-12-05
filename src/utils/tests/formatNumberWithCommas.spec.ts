import { describe, expect, test } from "vitest";
import formatNumberWithCommas from "../formatNumberWithCommas";

describe("formatNumberWithCommas function", () => {
  test("正整数", () => {
    expect(formatNumberWithCommas(12345678)).toBe("12,345,678");
  });

  test("负整数", () => {
    expect(formatNumberWithCommas(-12345678)).toBe("-12,345,678");
  });

  test("小数", () => {
    expect(formatNumberWithCommas(12345678.1234)).toBe("12,345,678.1234");
  });
});
