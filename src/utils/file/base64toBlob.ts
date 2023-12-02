/**
 * ### base64转blob
 * @param base64String base64编码
 * @param contentType
 * @returns 返回 Blob 对象
 */
export function base64toBlob(
  base64String: string,
  contentType: string = "application/octet-stream"
): Blob {
  const byteCharacters = atob(base64String);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const chunk = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(chunk.length);

    for (let i = 0; i < chunk.length; i++) {
      byteNumbers[i] = chunk.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

export default base64toBlob;
