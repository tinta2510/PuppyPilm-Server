import { Router } from "express";
import asyncHandler from "../utils/asyncHandler";
import UserController from "../controllers/userController";

const router = Router();

router.get("/rankings", asyncHandler(UserController.getRankings));

export default router;