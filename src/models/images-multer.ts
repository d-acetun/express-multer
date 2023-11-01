import path from "node:path";

class ImageMulterModel {
  static async upload(filePath: string) {
    const extension = path.extname(filePath);
    return { path: filePath, extension };
  }
}

export default ImageMulterModel;
