import express from 'express';
import * as board from '../controllers/board.js';

const router = express.Router();
router.post('/comment/:id', board.createComment);

export default router;
