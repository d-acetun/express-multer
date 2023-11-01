import { Request, Response } from "express";
import ImageMulterModel from "../models/images-multer";
class ImagesMulterController {
  static async upload(req: Request, res: Response) {
    const path = req.file?.path;
    if (!path) return res.sendStatus(400);
    const images = await ImageMulterModel.upload(path);
    res.status(200).json(images);
  }
}

export default ImagesMulterController;
