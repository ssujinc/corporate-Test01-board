CREATE TABLE `comment` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `board_id` int,
  `contents` varchar(255),
  `depth` int DEFAULT 0,
  `parent_id` int,
  `creatred_at` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_comment_user_id_user_id FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
  CONSTRAINT fk_comment_parent_id_comment_id FOREIGN KEY (parent_id) REFERENCES comment (parent_id) ON DELETE CASCADE
);