import getRandomNumber from "./getRandomNumber";

/**
 * ### 生成 `rgb|rgba` 类型随机颜色
 * @param type 类型 `rgb|rgba` `default='rgb'`
 * @returns 返回生成 `rgb|rgba` 随机颜色
 */
function getRandomRgbColor(type: "rgb" | "rgba" = "rgb"): string {
  let color = "";

  for (let i = 0; i < 3; i++) {
    if (i) {
      color += ", ";
    }
    color += getRandomNumber(0, 255);
  }

  if (type === "rgb") {
    return `rgb(${color})`;
  }
  const opacity = getRandomNumber(1, 10) / 10;
  return `rgba(${color}, ${opacity})`;
}

export default getRandomRgbColor;
