SELECT usuario,
IF (YEAR(MAX(data_reproducao)) = 2021, 'Usuário ativo', 'Usuário inativo') AS condicao_usuario 
FROM historico_de_reproducoes AS reproducoes
INNER JOIN pessoa_usuaria AS usuario
ON reproducoes.usuario_id = usuario.usuario_id
GROUP BY usuario
ORDER BY usuario ASC;