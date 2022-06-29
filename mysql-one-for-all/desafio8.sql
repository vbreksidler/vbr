SELECT nome_artista AS artista, nome_album AS album FROM pessoa_artista AS p
INNER JOIN album AS a
ON a.artista_id = p.artista_id
LIMIT 2;