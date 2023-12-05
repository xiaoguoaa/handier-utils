import { describe, expect, test } from "vitest";
import getRandomString from "../utils/getRandomString";

describe("getRandomString function", () => {
  test("random string", () => {
    const len = 16;
    let result = getRandomString(len);
    expect(typeof result).toBe("string");
    expect(result.length).toBe(len);
    while (result?.length) {
      expect(result[0]).toMatch(/[a-zA-Z1-9]/);
      result = result.slice(1);
    }
  });
});
