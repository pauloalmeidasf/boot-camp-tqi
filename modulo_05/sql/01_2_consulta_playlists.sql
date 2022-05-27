SELECT video.title AS Curso, playlist.title AS PlayList, author.name AS 'Autor Curso', (SELECT author.name FROM author JOIN playlist ON playlist.author = author.id) AS 'Autor PlayList'  FROM video_playlist
	JOIN video ON video.id = video_playlist.video
	JOIN playlist ON playlist.id = video_playlist.playlist
	JOIN author ON author.id = video.author

    
