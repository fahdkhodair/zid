
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";
import { logger } from "../utils/logger";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode =
    error instanceof ApiError ? error.statusCode : 500;

  logger.error({
    message: error.message,
    method: req.method,
    path: req.originalUrl,
    stack: error.stack,
  });

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? "Internal Server Error"
        : error.message,
  });
};
