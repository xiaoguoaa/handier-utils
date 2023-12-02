/**
 * ### 文件转 base64
 * @param file 要转换的文件
 * @returns 返回 `Promise<base64 编码>`
 */
function readFileAsBase64(file: File): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("文件转 base64 失败"));
      }
    };

    reader.onerror = () => {
      reject(new Error("读取文件失败"));
    };

    reader.readAsDataURL(file);
  });
}

export default readFileAsBase64;
