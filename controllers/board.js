import * as boardService from '../services/board.js';

export const readBoard = async (req, res) => {
  try {
    const boardId = req.params.id;
    const pageNum = req.query.page;
    const readBoard = await boardService.readBoard(boardId, pageNum);
    return res.status(200).json(readBoard);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const getBoards = async (req, res) => {
  try {
    const { keyword } = req.query;
    const searchResult = await boardService.getBoards(keyword);
    if (keyword === '') {
      return res.sendStatus(204);
    }
    return res.status(200).json(searchResult);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const updateView = async (req, res) => {
  try {
    const boardId = req.params.id;
    const { userId } = req.body;
    const view = await boardService.updateView(boardId, userId);
    return res.status(200).json(view);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
