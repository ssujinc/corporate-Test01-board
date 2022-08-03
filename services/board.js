import * as getBoard from '../models/board.js';

export const readBoard = async (keyword) => {
  const searchResult = await getBoard.getBoard(keyword);
  return searchResult;
};

export const createComment = async (createCommentDto) => {
  await getBoard.createComment(createCommentDto);
};

export const updateView = async (boardId, userId) => {
  await getBoard.updateView(boardId, userId);
};
