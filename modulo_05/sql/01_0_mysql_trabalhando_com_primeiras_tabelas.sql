/*

Aula de MySQL do Boot Camp TQI oferecido em parceria com a DIO.
Neste exercício, utilizei o MySQL 8 e o MySQL Workbench.

*/ 

-- Cria tabela author
CREATE TABLE author(
	
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (45),
    born DATE
    
);

-- Cria tabela seo
CREATE TABLE seo(

	id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(45) NOT NULL

);

-- Cria tabela video
CREATE TABLE video(

	id INT AUTO_INCREMENT PRIMARY KEY,
    author INT NOT NULL,
    seo INT NOT NULL,
    title VARCHAR(45) NOT NULL,
    likes INT NOT NULL,
    dislikes INT NOT NULL,
    CONSTRAINT fk_author_video FOREIGN KEY (author) REFERENCES author(id),
    CONSTRAINT fk_seo FOREIGN KEY (seo) REFERENCES seo(id)
    
);

-- Cria tabela playlist
CREATE TABLE playlist(

	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    author INT NOT NULL,
    CONSTRAINT fk_author_playlist FOREIGN KEY (author) REFERENCES author (id)
    
);

-- Cria tabela video_playlist (relacionamento N:N entre as tabelas video e playlist)
CREATE TABLE video_playlist(

	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    video INT NOT NULL,
    playlist INT NOT NULL,
    CONSTRAINT fk_video_playlist FOREIGN KEY (video) REFERENCES video(id),
    CONSTRAINT fk_playlist FOREIGN KEY (playlist) REFERENCES playlist(id)
    
);

-- Insere os dados na tabela author
INSERT INTO author (name, born) VALUE ('MARIA', '1992-04-19');
INSERT INTO author (name, born) VALUE ('PEDRO','1990-05-15');
INSERT INTO author (name, born) VALUE ('JOAO','1989-12-12');
INSERT INTO author (name, born) VALUE ('FLAVIA','2000-01-01');

-- Insere os dados na tabela seo
INSERT INTO seo (category) VALUE ('FRONT END');
INSERT INTO seo (category) VALUE ('BACK END');

-- Insere os dados na tabela video
INSERT INTO video (author, title, likes, dislikes, seo) VALUE (1, 'MYSQL', 100, 2, 2);
INSERT INTO video (author, title, likes, dislikes, seo) VALUE (1, 'HTML', 120, 1, 1);
INSERT INTO video (author, title, likes, dislikes, seo) VALUE (1, 'CSS', 125, 0, 1);
INSERT INTO video (author, title, likes, dislikes, seo) VALUE (2, 'JAVASCRIPT', 130, 3, 1);
INSERT INTO video (author, title, likes, dislikes, seo) VALUE (3, 'PYTHON', 200, 0, 2);
INSERT INTO video (author, title, likes, dislikes, seo) VALUE (3, 'PHP', 80, 2, 2);

-- Insere os dados na tabela playlist
INSERT INTO playlist (title, author) VALUE ('MYSQL + PHP + HTML + CSS + JAVASCRIPT', 4);    -- playlist 1
INSERT INTO playlist (title, autohr) VALUE ('MYSQL + PYTHON + CSS + JAVASCRIPT', 4);        -- playlist 2

-- Inser os dados na tabela video_playlist da playlist 1
INSERT INTO video_playlist (video, playlist) VALUE (1, 1);                                  -- MYSQL
INSERT INTO video_playlist (video, playlist) VALUE (6, 1);                                  -- PHP
INSERT INTO video_playlist (video, playlist) VALUE (2, 1);                                  -- HTML
INSERT INTO video_playlist (video, playlist) VALUE (3, 1);                                  -- CSS
INSERT INTO video_playlist (video ,playlist) VALUE (4, 1);                                  -- JAVASCRIPT