import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';

const app = express();

// Middleware for parsing JSON
app.use(express.json());

app.use('/api', routes);

// Error-handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}, // Do not expose errors in production
  });
});

export default app;
