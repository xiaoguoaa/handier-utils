import { describe, expect, test } from "vitest";
import firstLetterUpper from "../firstLetterUpper";

describe("firstLeterUpper function", () => {
  test("正常字符串", () => {
    expect(firstLetterUpper("hello")).toEqual("Hello");
  });

  test("空串", () => {
    expect(firstLetterUpper("")).toEqual("");
  });
});
