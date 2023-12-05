import { expect, test, describe } from "vitest";
import chunk from "../utils/chunk";

describe("数组拆分", () => {
  test("正常情况", () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunkedArray = chunk(inputArray, 3);

    expect(chunkedArray).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8],
    ]);
  });

  test("空数组", () => {
    const inputArray: any[] = [];
    const chunkedArray = chunk(inputArray, 3);

    expect(chunkedArray).toEqual([]);
  });

  test("size=0", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const chunkedArray = chunk(inputArray, 0);

    expect(chunkedArray).toEqual([]);
  });

  test("size > 数组长度", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const chunkedArray = chunk(inputArray, 10);

    expect(chunkedArray).toEqual([inputArray]);
  });

  test("size 为负数", () => {
    const inputArray = [1, 2, 3, 4, 5];
    const chunkedArray = chunk(inputArray, -2);

    expect(chunkedArray).toEqual([]);
  });
});
