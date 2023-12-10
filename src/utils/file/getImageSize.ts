/**
 * ### 获取图片宽高
 * @param {(string | File)} imageSource 支持传入 url 路径，或者 file 文件
 * @return {*}  {Promise<{ width: number; height: number }>}
 */
async function getImageSize(
  imageSource: string | File
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };

    img.onerror = (error) => {
      reject(error);
    };

    if (typeof imageSource === "string") {
      img.src = imageSource;
    } else if (imageSource instanceof File) {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          img.src = event.target.result;
        } else {
          reject(new Error("读取文件失败"));
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(imageSource);
    } else {
      reject(new Error("错误的文件资源"));
    }
  });
}

export default getImageSize;
