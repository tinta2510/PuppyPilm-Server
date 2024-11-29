import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../utils/errorResponses";
import dotenv from "dotenv";

dotenv.config();

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorResponse) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: process.env.NODE_ENV === 'development' ? err : {},
    });
  } 
  else if (err instanceof Error) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: process.env.NODE_ENV === 'development' ? err : {},
    });
  }
  else {
    // Handle generic errors
    res.status(500).json({
      success: false,
      message: "An unexpected error occured.",
      error: process.env.NODE_ENV === 'development' ? err : {},
    });
  }
};

export default errorHandler;
