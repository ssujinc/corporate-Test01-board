import * as getBoard from '../models/board.js';

export const readBoard = async (boardId, pageNum) => {
  return await getBoard.getBoard(boardId, pageNum);
};

export const readBoards = async (keyword) => {
  const searchResult = await getBoard.getBoards(keyword);
  return searchResult;
};

export const createComment = async (createCommentDto) => {
  await getBoard.createComment(createCommentDto);
};

// export const readComment = async (pageNum) => {
//   const resultComment = await getBoard.getComment(pageNum);
//   return resultComment;
// };

export const updateView = async (boardId, userId) => {
  const existingUser = await getBoard.getUserById(boardId, userId);
  if (existingUser) {
    const view = Number((await getBoard.readView(boardId))[0].cnt);
    return view;
  }
  await getBoard.updateView(boardId, userId);
  const view = Number((await getBoard.readView(boardId))[0].cnt);
  return view;
};
