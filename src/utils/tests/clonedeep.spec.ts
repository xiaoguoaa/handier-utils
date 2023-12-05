import { describe, test, expect } from "vitest";
import cloneDeep from "../cloneDeep";

describe("cloneDeep function", () => {
  test("源对象是 null", () => {
    const result = cloneDeep(null);
    expect(result).toBeNull();
  });

  test("源对象不是 object", () => {
    const resultNumber = cloneDeep(1);
    expect(resultNumber).toBe(1);

    const resultString = cloneDeep("hello");
    expect(resultString).toBe("hello");
  });

  test("源对象是数组", () => {
    const sourceArray = [1, 2, 3];
    const resultArray = cloneDeep(sourceArray);
    expect(resultArray).not.toBe(sourceArray);
    expect(resultArray).toEqual(sourceArray);
  });

  test("源对象是普通对象", () => {
    const sourceObject = { a: 1, b: 2 };
    const resultObject = cloneDeep(sourceObject);
    expect(resultObject).not.toBe(sourceObject);
    expect(resultObject).toEqual(sourceObject);
  });

  test("源对象是嵌套对象", () => {
    const sourceObject = { a: 1, b: { c: 2 } };
    const resultObject = cloneDeep(sourceObject);
    expect(resultObject.b).not.toBe(sourceObject.b);
  });
});
