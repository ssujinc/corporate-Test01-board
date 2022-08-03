import * as getBoard from '../models/board.js';

export const readBoard = async (keyword) => {
  const searchResult = await getBoard.getBoard(keyword);
  return searchResult;
};

export const createComment = async (createCommentDto) => {
  await getBoard.createComment(createCommentDto);
};

export const updateView = async (boardId, userId) => {
  // 같은 User가 게시글을 읽는 경우 count 수 증가하면 안 된다.
  // 유저 1번이 게시판 1번을 들어오면 조회수 1 올라감.
  // 다시 유저 1번이 게시판 1번을 들어오면 조회수 그대로
  await getBoard.updateView(boardId, userId);
};
