/**
 * ### 校验身份证号
 * @param idCard 身份证号码
 * @returns `true|false`
 */
function isValidIDCard(idCard: string): boolean {
  // 正则表达式匹配身份证号码格式
  const idCardPattern =
    /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;

  // 验证格式
  if (!idCardPattern.test(idCard)) {
    return false;
  }

  // 验证最后一位校验码
  const coefficients = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checkCodeMap = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];

  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += parseInt(idCard.charAt(i)) * coefficients[i];
  }

  const mod = sum % 11;
  const checkCode = checkCodeMap[mod];

  return idCard.charAt(17).toUpperCase() === checkCode.toString();
}

export default isValidIDCard;
