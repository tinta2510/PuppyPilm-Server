import { Router } from "express";
import asyncHandler from "../utils/asyncHandler";
import MovieController from "../controllers/movieController";
import { authenticate, authorize } from "../middlewares/authMiddleware";

const router = Router();

router.get("/awards", asyncHandler(MovieController.filterMovieByAwards));
router.get("/", asyncHandler(MovieController.filterMovie));
router.get("/all", asyncHandler(MovieController.getAllMovies));
router.post("/", authenticate, authorize(['admin']), asyncHandler(MovieController.insertMovie));
router.delete("/:id", authenticate, authorize(['admin']), asyncHandler(MovieController.deleteMovie));
router.patch("/:id", authenticate, authorize(['admin']), asyncHandler(MovieController.updateMovie));

export default router;