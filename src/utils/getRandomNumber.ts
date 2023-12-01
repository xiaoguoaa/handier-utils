/**
 * ### 生成范围内[min, max]随机数
 * @param min 随机数范围最小值 `default=0`
 * @param max 随机数范围最大值 `default=100`
 * @returns 范围内`[min, max]`随机数
 */
function getRandomNumber(min = 0, max = 100) {
  // 向下取整确保得到整数
  min = Math.floor(min);
  max = Math.floor(max);

  if (min > max) {
    throw new Error("参数 min 需少于 参数 max");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default getRandomNumber;
