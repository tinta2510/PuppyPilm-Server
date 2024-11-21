import { Router, Request, Response } from 'express';

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello everyone. I am Tin."})
})


export default router;