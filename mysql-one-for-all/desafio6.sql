SELECT
MIN(valor_plano) AS faturamento_minimo,
MAX(valor_plano) AS faturamento_maximo,
ROUND(AVG(valor_plano), 2) AS faturamento_medio,
SUM(valor_plano) AS faturamento_total
FROM pessoa_usuaria AS usuario
INNER JOIN plano AS p
ON usuario.plano_id = p.plano_id;