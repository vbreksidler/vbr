SELECT usuario, ROUND(SUM(duracao_segundos)/60, 2) AS total_minutos, COUNT(usuario) AS qtde_musicas_ouvidas
FROM historico_de_reproducoes AS reproducoes
INNER JOIN pessoa_usuaria AS usuario
ON reproducoes.usuario_id = usuario.usuario_id
INNER JOIN lista_cancoes AS cancoes
ON cancoes.cancao_id = reproducoes.cancao_id
GROUP BY usuario
ORDER BY usuario ASC;
