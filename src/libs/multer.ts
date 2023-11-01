import multer from "multer";
import path from "node:path";
import { randomUUID } from "node:crypto";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const uuid = randomUUID();
    cb(null, `${uuid}${file.fieldname}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

export default upload;
