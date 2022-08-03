import * as getBoard from '../models/board.js';

export const readBoard = async (keyword) => {
  const searchResult = await getBoard.getBoard(keyword);
  // const newDataList = [];
  // searchResult.forEach((element) => {
  //   newDataList.push(...Object.values(element));
  // });
  return searchResult;
};

export const createComment = async (createCommentDto) => {
  await getBoard.createComment(createCommentDto);
};
