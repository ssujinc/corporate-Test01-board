import * as commentModels from '../models/comment.js';

export const createComment = async (createCommentDto) => {
  await commentModels.createComment(createCommentDto);
};

// export const readComment = async (pageNum) => {
//   const resultComment = await commentModels.getComment(pageNum);
//   return resultComment;
// };
