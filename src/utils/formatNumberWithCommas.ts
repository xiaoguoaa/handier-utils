/**
 * ### 数字转换为带千字符的字符串
 * @param num 要转换的数字 `12345678`
 * @returns `12,345,678`
 */
function formatNumberWithCommas(num: number) {
  if (isNaN(num)) {
    throw new Error("请输入数字");
  }

  return num.toString().replace(/(?<!\..*)\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatNumberWithCommas;
