import { Request, Response, NextFunction } from "express";
import "../types/express"; // Import the custom types
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../utils/errorResponses";

declare module "express" {
  interface Request {
    user?: any;
  }
}

const JWT_SECRET = process.env.JWT_SECRET || "tatrungtin";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    throw new UnauthorizedError("No token provided");
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      throw new UnauthorizedError("Failed to authenticate token");
    }
    req.user = decoded;
    next();
  });
};

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("You do not have permission to access this resource");
    }
    next();
  };
};