import * as boardService from '../services/board.js';

export const readBoard = async (req, res) => {
  try {
    const { keyword } = req.query;
    const searchResult = await boardService.readBoard(keyword);
    if (keyword === '') {
      return res.sendStatus(204);
    }
    return res.status(200).json(searchResult);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

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
    await boardService.createComment(createCommentDto);
    return res.status(200).json({ message: 'CREATE' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const updateView = async (req, res) => {
  try {
    const boardId = req.params.id;
    const { userId } = req.body;
    await boardService.updateView(boardId, userId);
    return res.status(200).json({ message: 'SUCCESS' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
