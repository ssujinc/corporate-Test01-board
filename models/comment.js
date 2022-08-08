import prisma from '../prisma/index.js';

// export const getComment = async (pageNum) => {
//   const start = (pageNum - 1) * 5;
//   const query = `
//     SELECT *
//     FROM comment
//     ${start ? `LIMIT ${start}, 5` : `LIMIT 0,5`}`;
//   return query;
// };

export const createComment = async (createCommentDto) => {
  const { userId, boardId, comment, parentId } = createCommentDto;
  let depth;
  if (parentId !== undefined) {
    let pdepth = await prisma.$queryRaw`SELECT depth FROM comment WHERE id=${parentId}`;
    depth = Number(pdepth[0].depth) + 1;
  } else {
    depth = 0;
  }
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
