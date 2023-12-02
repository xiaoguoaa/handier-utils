function getMimeTypeFromBase64(base64String: string): string {
  const match = base64String.match(
    /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/
  );

  if (match && match[1]) {
    return match[1];
  }

  return "application/octet-stream";
}

/**
 * ### base64转blob
 * @param base64String base64编码
 * @param contentType 文件 mime 类型，有些特殊情况下取不到 mime 类型，这时候需要传入该参数
 * @returns 返回 Blob 对象
 */
export function base64toBlob(base64String: string, contentType?: string): Blob {
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

  return new Blob(byteArrays, {
    type: contentType || getMimeTypeFromBase64(base64String),
  });
}

export default base64toBlob;
