import type { FunctionVoidWithThis, FunctionVoid } from "./types";

/**
 * ### 防抖函数
 * @param func 要执行的函数
 * @param delay 延时时间(ms) `default=200`
 * @returns 返回防抖函数
 */
function debounce<T extends FunctionVoid>(
  func: T,
  delay: number = 200
): FunctionVoidWithThis<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const context = this;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export default debounce;
