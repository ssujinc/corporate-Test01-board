import express from 'express';
import * as comment from '../controllers/comment.js';

const router = express.Router();
router.post('/comment', comment.createComment);

// /comment + body 에 boardId
// /comment/boardId
// /board/:boardId/comment

export default router;
