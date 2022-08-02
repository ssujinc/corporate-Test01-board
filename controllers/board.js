import * as boardService from '../services/board.js';

export const readBoard = async (req, res) => {
  try {
    const { keyword } = req.query;
    const searchResult = await boardService.readBoard(keyword);
    if (keyword === '') {
      return res.sendStatus(204);
    }
    // const data = await boardService.readBoard();
    return res.status(200).json(searchResult);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const createComment = async (req, res) => {
  try {
    const boardId = req.params.id;
    const { userId, comment } = req.body;
    const searchResult = await boardService.createComment(boardId, userId, comment);
    return res.status(200).json(searchResult);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
