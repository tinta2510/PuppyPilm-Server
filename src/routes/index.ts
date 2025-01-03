import { Router, Request, Response } from 'express';
import movieRoutes from "./movieRoutes";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to PuppyPilm server."})
})
router.use("/auth", authRoutes);
router.use("/movies", movieRoutes);
router.use("/users", userRoutes);

export default router;