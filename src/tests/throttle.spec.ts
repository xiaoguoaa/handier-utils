import { describe, test, expect, vi } from "vitest";
import throttle from "../utils/throttle";

vi.useFakeTimers();
describe("throttle function", () => {
  test("正常情况", () => {
    const mockFunction = vi.fn();
    const throttledFunction = throttle(mockFunction, 200);

    throttledFunction();
    vi.advanceTimersByTime(200);
    throttledFunction();
    throttledFunction();

    expect(mockFunction).toBeCalledTimes(2);

    vi.advanceTimersByTime(200);
    throttledFunction();
    expect(mockFunction).toBeCalledTimes(3);
  });
});
