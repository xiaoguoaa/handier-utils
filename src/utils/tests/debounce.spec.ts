import { describe, test, expect, vi } from "vitest";
import debounce from "../debounce";

vi.useFakeTimers();
describe("debounce function", () => {
  test("正常情况", () => {
    const mockFunction = vi.fn();
    const debouncedFunction = debounce(mockFunction, 200);

    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    expect(mockFunction).not.toBeCalled();

    vi.advanceTimersByTime(200);

    expect(mockFunction).toBeCalledTimes(1);

    debouncedFunction();

    expect(mockFunction).toBeCalledTimes(1);

    vi.advanceTimersByTime(200);

    expect(mockFunction).toBeCalledTimes(2);
  });

  test("自定义延迟时间", () => {
    const mockFunction = vi.fn();

    const debouncedFunction = debounce(mockFunction, 500);

    debouncedFunction();

    vi.advanceTimersByTime(400);

    debouncedFunction();

    vi.advanceTimersByTime(400);

    expect(mockFunction).not.toBeCalled();

    vi.advanceTimersByTime(100);

    expect(mockFunction).toBeCalledTimes(1);
  });
});
