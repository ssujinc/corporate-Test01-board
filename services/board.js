import { boardModels } from '../models/index.js';

export const getBoardWithComment = async (boardId, pageNum) => {
  return await boardModels.getBoardWithComment(boardId, pageNum);
};

export const getBoards = async (keyword) => {
  const searchResult = await boardModels.getBoards(keyword);
  return searchResult;
};

export const increaseView = async (boardId, userId) => {
  const existingUser = await boardModels.getUserById(boardId, userId);
  if (existingUser) {
    const view = Number((await boardModels.readView(boardId))[0].cnt);
    return view;
  }
  await boardModels.increaseView(boardId, userId);
  const view = Number((await boardModels.readView(boardId))[0].cnt);
  return view;
};
