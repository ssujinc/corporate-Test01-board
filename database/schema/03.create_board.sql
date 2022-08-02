CREATE TABLE `board` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `contents` varchar(255),
  `views` int,
  `user_id` int,
  `categord_id` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` datetime ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_board_user_id_user_id FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
  CONSTRAINT fk_board_categord_id_categord_id FOREIGN KEY (categord_id) REFERENCES categord (id) ON DELETE CASCADE
);