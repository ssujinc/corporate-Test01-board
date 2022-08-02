import express from 'express';
const router = express.Router();
import boardRouter from './board.js';

router.use(boardRouter);

export default router;
