import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import morgan from "morgan";
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Log HTTP requests only in development
}

app.use('/api', routes);

// Error-handling middleware
app.use(errorHandler);

export default app;
