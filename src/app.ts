import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import morgan from "morgan";
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware for parsing JSON
// Allow localhost during development
if (process.env.NODE_ENV === 'development') {
  app.use(cors({
      origin: true, // Allow requests from this origin
      methods: ["GET", "POST", "PUT", "PATCH","DELETE", "OPTIONS"] , // Allow specific HTTP methods
      credentials: true, // Allow cookies/authorization headers
  }));
} else {
  app.use(cors({
    origin: 'https://your-production-fe-url.vercel.app',
    methods: ["GET"],
    credentials: true 
  }));
}

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Log HTTP requests only in development
}

app.use('/api', routes);

// Error-handling middleware
app.use(errorHandler);

export default app;
