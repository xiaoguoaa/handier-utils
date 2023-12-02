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
 * @returns 返回 Blob 对象
 */
export function base64toBlob(base64String: string): Blob {
  const base64Array = base64String.split(",");
  const contentType =
    base64Array[0].match(/:(.*?);/)?.[1] || "application/octet-stream";
  const byteCharacters = atob(base64Array[1]);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray], {
    type: contentType,
  });
  return blob;
}

export default base64toBlob;
