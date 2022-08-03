import prisma from './prisma-client.js';
import * as searchFilter from './util.js';

export const getBoard = async (keyword) => {
  await prisma.user.create({
    data: {
      nickname: '수진',
    },
  });

  return await prisma.$queryRawUnsafe(`
    SELECT
      board.id,
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
  const { userId, boardId, comment, parentId } = createCommentDto;
  let depth = 0;
  if (parentId !== null) depth = Number(parentId) + 1;
  const query = `
    INSERT INTO comment (
      user_id, 
      board_id, 
      contents
      ${parentId ? `, depth, parent_id` : ``}
    )
    VALUES (
      ${userId}, ${boardId}, "${comment}" 
      ${parentId ? `,${depth}, ${parentId}` : ``}
    );
  `;
  await prisma.$queryRawUnsafe(query);
};

export const getView = async (boardId) => {
  return await prisma.$queryRaw`
    SELECT views
    FROM board
    WHERE id=${boardId};
  `;
};

export const updateView = async (boardId, userId) => {
  let view = (await getView(boardId))[0].views + 1;
  return await prisma.$queryRaw`
    UPDATE board SET views=${view} WHERE id=${boardId}
  `;
};
