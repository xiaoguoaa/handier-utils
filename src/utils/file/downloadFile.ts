/**
 * ### 下载文件
 * @param file
 * @param fileName
 */
function downloadFile(file: Blob, fileName: string): void {
  const url = window.URL.createObjectURL(file);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName || "download";
  a.style.display = "none";

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export default downloadFile;
