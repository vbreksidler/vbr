SELECT count(*) AS quantidade_musicas_no_historico FROM historico_de_reproducoes AS reproducoes
INNER JOIN pessoa_usuaria AS usuario
ON reproducoes.usuario_id = usuario.usuario_id
WHERE usuario LIKE 'Bill';