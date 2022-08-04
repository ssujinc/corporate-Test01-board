import express from 'express';
import * as board from '../controllers/board.js';

const router = express.Router();
router.get('/comment', board.readComment);
router.post('/comment/:id', board.createComment);

export default router;
