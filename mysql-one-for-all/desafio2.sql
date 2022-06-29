SELECT COUNT(distinct nome_cancao) AS cancoes,
COUNT(distinct nome_artista) AS artistas,
COUNT(distinct nome_album) AS albuns
FROM lista_cancoes, pessoa_artista, album;