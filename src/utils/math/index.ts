function getPrecision(number: number): number {
  const decimalPart = String(number).split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}

/**
 * ### 数字相加，解决精度丢失问题
 * @param {...number[]} numbers
 * @return {*}  {number}
 */
function add(...numbers: number[]): number {
  const maxPrecision = Math.max(...numbers.map(getPrecision));
  const precision = Math.pow(10, maxPrecision);

  let result = 0;

  for (const num of numbers) {
    result = (result * precision + num * precision) / precision;
  }

  return result;
}

/**
 * ### 数字相减，解决精度丢失问题
 * @param {...number[]} numbers
 * @return {*}  {number}
 */
function sub(...numbers: number[]): number {
  const maxPrecision = Math.max(...numbers.map(getPrecision));
  const precision = Math.pow(10, maxPrecision);

  let result = numbers[0];

  for (const num of numbers.slice(1)) {
    result = (result * precision - num * precision) / precision;
  }

  return result;
}

export { add, sub };
