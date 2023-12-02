/**
 * ### base64 转 file
 * @param base64String base64 编码
 * @param fileName 文件名
 * @returns 返回转换后的文件
 */
function base64toFile(base64String: string, fileName: string): File {
  const base64Array = base64String.split(",");
  const contentType =
    base64Array[0].match(/:(.*?);/)?.[1] || "application/octet-stream";
  const byteCharacters = atob(base64Array[1]);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: contentType });

  return new File([blob], fileName, { type: contentType });
}

export default base64toFile;
