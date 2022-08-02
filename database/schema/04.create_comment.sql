CREATE TABLE `comment` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `board_id` int,
  `contents` varchar(255),
  `depth` int DEFAULT 0,
  `group` int,
  `creatred_at` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_comment_user_id_user_id FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
  CONSTRAINT fk_comment_board_id_board_id FOREIGN KEY (board_id) REFERENCES board (id) ON DELETE CASCADE
);