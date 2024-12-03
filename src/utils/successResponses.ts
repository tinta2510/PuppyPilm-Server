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
  meta: any = {},
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message: message,
    data,
    meta
  });
};

export const okResponse = (
  res: Response, 
  message: string = "Request successful.", 
  data: any = {},
  meta: any = {},
) => {
  return successResponse(res, message, data, meta, 200);
};

export const createdResponse = (
  res: Response,
  message: string = "Resource created successfully.",
  data: any = {},
  meta: any = {}
) => {
  return successResponse(res, message, data, meta,201);
};