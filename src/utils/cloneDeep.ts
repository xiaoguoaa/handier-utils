/**
 * ### 深拷贝
 * @param source 要拷贝的源对象
 * @returns 返回拷贝后的目标对象
 */
function cloneDeep<T>(source: T): T {
  if (source === null || typeof source !== "object") {
    return source;
  }

  if (Array.isArray(source)) {
    // 处理数组的情况
    return source.map((item) => cloneDeep(item)) as T;
  }

  // 处理对象的情况
  const clonedObj: Record<string, any> = {};

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      clonedObj[key] = cloneDeep(source[key]);
    }
  }

  return clonedObj as T;
}

export default cloneDeep;
