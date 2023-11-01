import { Router } from "express";

import imagesMulterRouter from "./images-multer";
const router = Router();

router.use("/images-multer", imagesMulterRouter);

export default router;
