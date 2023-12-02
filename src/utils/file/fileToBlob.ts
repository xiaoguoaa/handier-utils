/**
 * file 转 blob
 * @param {File} file 传入的文件
 * @return {*}  {Promise<Blob>}
 */
function fileToBlob(file: File): Promise<Blob> {
  return new Promise<Blob>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        const blob = new Blob([reader.result], { type: file.type });
        resolve(blob);
      } else {
        reject(new Error("Failed to convert file to Blob."));
      }
    };

    reader.onerror = () => {
      reject(new Error("Error reading file."));
    };

    reader.readAsArrayBuffer(file);
  });
}

export default fileToBlob;
