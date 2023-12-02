/**
 * ### blob 转 file
 * @param blob 要转换的 Blob 对象
 * @param fileName 文件名
 * @returns
 */
function blobToFile(blob: Blob, fileName: string): File {
  // 获取 Blob 中的类型
  const type = blob.type;

  // 使用 File 构造函数创建 File 对象
  const file = new File([blob], fileName, { type });

  return file;
}

export default blobToFile;
