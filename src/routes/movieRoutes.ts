import { Router } from "express";
import asyncHandler from "../utils/asyncHandler";
import MovieController from "../controllers/movieController";

const router = Router();

router.get("/awards", asyncHandler(MovieController.filterMovieByAwards));
router.post("/", asyncHandler(MovieController.insertMovie));
router.delete("/:id", asyncHandler(MovieController.deleteMovie));
router.patch("/:id", asyncHandler(MovieController.updateMovie));

export default router;