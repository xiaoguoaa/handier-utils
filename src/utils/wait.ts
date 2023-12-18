/**
 * 等待一段时间
 * @param ms `number` 等待时间，单位毫秒，默认 1000
 * @returns `Promise<void>`
 */
function wait(ms: number = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });
}

export default wait;
