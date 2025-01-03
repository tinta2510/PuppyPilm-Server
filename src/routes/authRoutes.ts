import { Router } from "express";
import asyncHandler from "../utils/asyncHandler";
import AuthController from "../controllers/authController";

const router = Router();

router.post("/login", asyncHandler(AuthController.login));
router.post("/logout", asyncHandler(AuthController.logout));

export default router;