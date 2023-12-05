import { describe, expect, it } from "vitest";
import isValidIDCard from "../utils/isValidIDCard";

describe("isValidIDCard function", () => {
  it("错误格式1", () => {
    const invalidIDCard = "123456789012345678";
    const isValid = isValidIDCard(invalidIDCard);

    expect(isValid).toBe(false);
  });

  it("错误格式2", () => {
    const invalidCheckCodeIDCard = "110101198001010011";
    const isValid = isValidIDCard(invalidCheckCodeIDCard);

    expect(isValid).toBe(false);
  });

  it("错误格式3", () => {
    const invalidFormatIDCard = "123456789";
    const isValid = isValidIDCard(invalidFormatIDCard);

    expect(isValid).toBe(false);
  });
});
