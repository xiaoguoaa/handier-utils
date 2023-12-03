/**
 * ### 拆分数组
 * @param array 要拆分的数组
 * @param size 每块数组的大小
 * @returns 返回拆分后的数组
 */
function chunk(array: any[], size: number): any[][] {
  size = Math.max(size, 0);
  const length = array.length;
  if (!length || !size) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result: any[][] = Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
}

export default chunk;
