SELECT nome_cancao AS cancao, count(*) AS reproducoes FROM historico_de_reproducoes AS reproducoes
INNER JOIN lista_cancoes AS cancao
ON reproducoes.cancao_id = cancao.cancao_id
GROUP BY nome_cancao
ORDER BY reproducoes DESC, cancao ASC
LIMIT 2;