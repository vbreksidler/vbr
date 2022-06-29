/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numbers) => {
  let soma = 0;
  let len = numbers.length;
  let resultado = 0;

  if (Number.isNaN(resultado)
    || len === 0
    || numbers.some((e) => (typeof e === 'string'))) {
    return undefined;
  }

  numbers.forEach((e) => {
    soma += e;
  });
  resultado = Math.round(soma / len);
  return resultado;
};
module.exports = average;
