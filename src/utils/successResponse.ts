import { NONAME } from 'dns';
import { Response } from 'express';

/**
 * Sends a standardized success response.
 * @param res - Express response object.
 * @param message - Success message.
 * @param data - Data to send in the response.
 * @param statusCode - HTTP status code (default: 200).
 */
export const successResponse = (
  res: Response, 
  message: string = "Request successful.", 
  data: any = {}, 
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message: message,
    data,
  });
};

export const okResponse = (
  res: Response, 
  message: string = "Request successful.", 
  data: any = {}
) => {
  return successResponse(res, message, data, 200);
};

export const createdResponse = (
  res: Response,
  message: string = "Resource created successfully.",
  data: any = {},
) => {
  return successResponse(res, message, data, 201);
};