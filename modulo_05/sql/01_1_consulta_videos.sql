SELECT video.title AS CURSO, video.likes AS LIKES, video.deslikes AS DESLIKES, author.name AS AUTOR, seo.category AS CATEGORIA FROM video 
	JOIN author ON author.id = video.author
	JOIN seo ON seo.id = video.seo