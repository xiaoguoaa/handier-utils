import { expect, test, describe } from "vitest";
import clone from "../utils/clone";

describe("浅拷贝", () => {
  test("源对象是 null", () => {
    const result = clone(null);
    expect(result).toBeNull();
  });

  test("源对象不是 object", () => {
    const resultNumber = clone(42);
    const resultString = clone("hello");
    const resultBoolean = clone(true);

    expect(resultNumber).toBe(42);
    expect(resultString).toBe("hello");
    expect(resultBoolean).toBe(true);
  });

  test("数组", () => {
    const sourceArray = [1, 2, 3];
    const result = clone(sourceArray);

    expect(result).toEqual(sourceArray);
    expect(result).not.toBe(sourceArray); // Check if test's a deep clone
  });

  test("对象", () => {
    const sourceObject = { a: 1, b: { c: 2 } };
    const result = clone(sourceObject);

    expect(result).toEqual(sourceObject);
    expect(result).not.toBe(sourceObject); // Check if test's a deep clone
  });

  test("嵌套对象", () => {
    const sourceObject = { a: 1, b: { c: 2 } };

    const result = clone(sourceObject);

    expect(result.b).toEqual(sourceObject.b);
    expect(result.b).toBe(sourceObject.b);
  });

  // Add more tests as needed
});
