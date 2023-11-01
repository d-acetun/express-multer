import { Router } from "express";
import ImageController from "../controllers/images-multer";
const imagesMulterRouter = Router();
import upload from "../libs/multer";

imagesMulterRouter.post("/upload", upload.single("avatar"), ImageController.upload);
export default imagesMulterRouter;
