import { Router, Request, Response } from 'express';
import movieRoutes from "./movieRoutes";
import userRoutes from "./userRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to PuppyPilm server."})
})

router.use("/movies", movieRoutes);
router.use("/users", userRoutes);

export default router;