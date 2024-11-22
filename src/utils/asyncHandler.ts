import { Request, Response, NextFunction } from 'express';

/**
 * Wraps an async function to handle exceptions and pass them to the error handler middleware.
 * @param fn - The async function to wrap.
 * @returns A function that executes the async function and handles errors.
 */
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default asyncHandler;