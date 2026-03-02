import express from "express"
import { registerController } from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/register", upload.single("image"), registerController);

export default router;