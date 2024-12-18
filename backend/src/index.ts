import express, { Express, Request, Response } from 'express';
import { PORT } from './secrets';
import rootRouter from './routes';
import { PrismaClient } from '@prisma/client';
import { errorMiddleware } from './middlewares/errors';
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use('/api', rootRouter);
app.use('/uploads', express.static('uploads'));

export const prismaClient = new PrismaClient({
  log: ['query'],
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log('Listening on port 8088');
});