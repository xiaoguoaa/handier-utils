/**
 * **拆分数组**
 * @param array 要拆分的数组
 * @param size 每块数组的大小
 * @returns 返回拆分后的数组
 */
declare function chunk(array: any[], size: number): any[];

type FunctionVoidWithThis<T extends (...args: any[]) => any> = (this: ThisParameterType<T>, ...args: Parameters<T>) => void;
type FunctionVoid = (...args: any[]) => void;

/**
 * 节流函数
 * @param func 要执行的函数
 * @param delay 延时时间(ms) -- default: 200
 * @returns 返回节流函数
 */
declare function throttle<T extends FunctionVoid>(func: T, delay?: number): FunctionVoidWithThis<T>;

/**
 * 防抖函数
 * @param func 要执行的函数
 * @param delay 延时时间(ms) -- default: 200
 * @returns 返回防抖函数
 */
declare function debounce<T extends FunctionVoid>(func: T, delay?: number): FunctionVoidWithThis<T>;

export { chunk, debounce, throttle };
