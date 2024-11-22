import { Router, Request, Response } from 'express';
import movieRoutes from "./movieRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to PuppyPilm server."})
})

router.use("/movies", movieRoutes);

export default router;