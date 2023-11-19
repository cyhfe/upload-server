import { Router } from "express";
import multer from "multer";
const router = Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profile");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/profile", upload.array("avatar"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.status(200);
  res.json({ message: "success" });
});
export default router;
