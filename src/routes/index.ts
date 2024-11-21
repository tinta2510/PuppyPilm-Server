import { Router, Request, Response } from 'express';

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "welcome to PuppyPilm server."})
})


export default router;