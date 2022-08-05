import * as commentService from '../services/comment.js';

// export const readComment = async (req, res) => {
//   try {
//     const pageNum = req.query.page;
//     const readComment = await commentService.readComment(pageNum);
//     return res.status(200).json(readComment);
//   } catch (error) {
//     return res.status(error.statusCode || 500).json({ message: error.message });
//   }
// };

export const createComment = async (req, res) => {
  try {
    const boardId = req.params.id;
    const { userId, comment, parentId } = req.body;
    const createCommentDto = {
      userId,
      boardId,
      comment,
      parentId,
    };
    await commentService.createComment(createCommentDto);
    return res.status(200).json({ message: 'CREATE' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
