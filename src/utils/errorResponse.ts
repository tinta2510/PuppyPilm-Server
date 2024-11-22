import { Response } from 'express';

/**
 * Sends a standardized error response.
 * @param res - Express response object.
 * @param message - Error message.
 * @param statusCode - HTTP status code (default: 500).
 * @param errors - Additional error details (optional).
 */
export const errorResponse = (
  res: Response,
  message: string = "An unexpected error occurred.",
  statusCode: number = 500,
  errors: any = null
) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
    errors,
  });
};

/**
 * Specialized response for Bad Request (400).
 */
export const badRequestError = (
  res: Response,
  message: string = "Invalid request. Please check your input.",
  errors: any = null
) => {
  return errorResponse(res, message, 400, errors);
};

/**
 * Specialized response for Internal Server Error (500).
 */
export const internalServerError = (
  res: Response,
  message: string = "An unexpected error occurred on the server.",
  errors: any = null
) => {
  return errorResponse(res, message, 500, errors);
};

// Example use: return badRequestError(res, "Name is required.", { field: "name" });