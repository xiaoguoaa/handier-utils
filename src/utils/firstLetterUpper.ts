/**
 * ### 首字母大写
 * @param str 要转换的字符串 `hello`
 * @returns 转换后的字符串 `Hello`
 */
function firstLetterUpper(str: string) {
  if (!str) {
    return "";
  }
  return str.at(0)?.toUpperCase() + str.slice(1);
}

export default firstLetterUpper;
