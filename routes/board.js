import express from 'express';
import * as board from '../controllers/board.js';

const router = express.Router();
router.get('/board/:id', board.readBoard);
router.put('/board/:id', board.updateView);
router.get('/boards', board.getBoards);

export default router;
