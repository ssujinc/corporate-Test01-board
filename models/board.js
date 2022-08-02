import prisma from './prisma-client.js';
import * as searchFilter from './util.js';

export const getBoard = async (keyword) => {
  return await prisma.$queryRawUnsafe(`
    SELECT
      board.title AS boardTitle,
      board.contents AS boardContent,
      user.nickname AS userName,
      c.commentContent,
      category.category
    FROM board
    LEFT JOIN user ON board.user_id=user.id
    LEFT JOIN (
      SELECT
          comment.board_id,
          JSON_ARRAYAGG(user.nickname) AS userCommentNickname,
          JSON_ARRAYAGG(comment.contents) AS commentContent
      FROM comment
      JOIN user on user.id=comment.user_id
      GROUP BY comment.board_id
    ) AS c ON c.board_id=board.id
    LEFT JOIN category ON category.id=board.category_id
    WHERE ${searchFilter.searchFilter(keyword)}
  `);
};

export const createComment = async (createCommentDto) => {
  const { boardId, userId, comment } = createCommentDto;
  await prisma.$queryRaw`
    INSERT INTO comment (user_id, board_id, contents, group_id)
    VALUES (${userId}, ${boardId}, ${comment}, 1);
  `;
};
