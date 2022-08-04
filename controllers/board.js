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

export const readBoards = async (req, res) => {
  try {
    const { keyword } = req.query;
    const searchResult = await boardService.readBoards(keyword);
    if (keyword === '') {
      return res.sendStatus(204);
    }
    return res.status(200).json(searchResult);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

// export const readComment = async (req, res) => {
//   try {
//     const pageNum = req.query.page;
//     const readComment = await boardService.readComment(pageNum);
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
    const view = await boardService.updateView(boardId, userId);
    return res.status(200).json(view);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
