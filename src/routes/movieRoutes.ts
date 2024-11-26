import { Router } from "express";
import asyncHandler from "../utils/asyncHandler";
import MovieController from "../controllers/movieController";

const router = Router();

router.get("/awards", asyncHandler(MovieController.filterMovie))

export default router;