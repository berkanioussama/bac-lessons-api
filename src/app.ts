import express, { type NextFunction } from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import classesRouter from './modules/classes/class.routes.js';
import lessonsRouter from './modules/lessons/lesson.routes.js';

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

const router = express.Router();

router.use('/classes', classesRouter);
router.use('/lessons', lessonsRouter);

router.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.use('/api', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Global error handler:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app;
