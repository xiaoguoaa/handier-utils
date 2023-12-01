/**
 * 生成随机字符串
 * @param len 自定字符串长度 --default=24
 * @returns 返回生成的随机字符串
 */
function getRandomString(len = 24) {
  let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
  let strLen = chars.length;
  let randomStr = "";
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
}

export default getRandomString;
