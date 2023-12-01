/**
 * 生成随机十六进制颜色码
 * 例：#8D73D1
 * @returns 返回生成的随机十六进制颜色码
 */
function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export default getRandomHexColor();
