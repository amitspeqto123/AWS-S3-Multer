import express from "express"
import { registerController } from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/register", upload.array("images", 3), registerController);

export default router;