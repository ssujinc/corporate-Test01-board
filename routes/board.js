import express from 'express';
import * as board from '../controllers/board.js';

const router = express.Router();
router.get('/board', board.readBoard);
router.post('/board/:id', board.createComment);

export default router;
