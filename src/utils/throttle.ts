import type { FunctionVoidWithThis, FunctionVoid } from "../types";

/**
 * 节流函数
 * @param func 要执行的函数
 * @param delay 延时时间(ms) -- default: 200
 * @returns 返回节流函数
 */
function throttle<T extends FunctionVoid>(
  func: T,
  delay: number = 200
): FunctionVoidWithThis<T> {
  let lastTime = 0;

  return function (this: ThisParameterType<T>, ...args: any[]) {
    const currentTime = new Date().getTime();

    if (currentTime - lastTime >= delay) {
      func.apply(this, args);
      lastTime = currentTime;
    }
  };
}

export default throttle;
