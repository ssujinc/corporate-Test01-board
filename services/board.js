import * as boardModels from '../models/board.js';

export const readBoard = async (boardId, pageNum) => {
  return await boardModels.readBoard(boardId, pageNum);
};

export const getBoards = async (keyword) => {
  const searchResult = await boardModels.getBoards(keyword);
  return searchResult;
};

export const updateView = async (boardId, userId) => {
  const existingUser = await boardModels.getUserById(boardId, userId);
  if (existingUser) {
    const view = Number((await boardModels.readView(boardId))[0].cnt);
    return view;
  }
  await boardModels.updateView(boardId, userId);
  const view = Number((await boardModels.readView(boardId))[0].cnt);
  return view;
};
