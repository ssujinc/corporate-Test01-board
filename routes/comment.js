import express from 'express';
import * as comment from '../controllers/comment.js';

const router = express.Router();
router.post('/comment/:id', comment.createComment);

export default router;
