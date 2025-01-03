import { Router } from "express";
import asyncHandler from "../utils/asyncHandler";
import UserController from "../controllers/userController";
import { authenticate, authorize } from "../middlewares/authMiddleware";

const router = Router();

router.get("/rankings", asyncHandler(UserController.getRankings));
router.post("/register", asyncHandler(UserController.createUser));
router.post("/register-admin", authenticate, authorize(['admin']), asyncHandler(UserController.createAdmin));

export default router;