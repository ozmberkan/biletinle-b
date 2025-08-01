import {
  getUserByIdController,
  loginController,
  logoutController,
  registerController,
} from "../controllers/user.controller.js";

import express from "express";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/:id", getUserByIdController);
router.post("/logout", logoutController);

export default router;
