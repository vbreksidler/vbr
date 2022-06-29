SELECT nome_cancao AS nome, count(nome_cancao) AS reproducoes FROM historico_de_reproducoes AS r
INNER JOIN pessoa_usuaria AS p
ON r.usuario_id = p.usuario_id
INNER JOIN lista_cancoes AS l
ON r.cancao_id = l.cancao_id
WHERE plano_id = 1 OR plano_id = 3
GROUP BY nome_cancao
ORDER BY nome ASC;