
  // Lista as operações da calculadora.
 
const OperacoesMatematicas = {
    ADICAO: 'add',
    SUBTRACAO: 'sub',
    MULTIPLICACAO: 'mul',
    DIVISAO: 'div'
  };
  
  /**
   * Gonçalo = Refatorou o código.
   * Realiza uma operação aritmética básica entre dois números.
   * @param {string} operacao - A operação a ser realizada (add, sub, mul, div).
   * @param {number} operacao1 - O primeiro operando.
   * @param {number} operacao2 - O segundo operando.
   * @return {number|string} O resultado da operação ou uma mensagem de erro.
   */

    /** Melhoramos as funções de operação. */
  function calcular(operacao, operacao1, operacao2) {
     (OperacoesMatematicas.ADICAO, OperacoesMatematicas.SUBTRACAO, OperacoesMatematicas.MULTIPLICACAO, OperacoesMatematicas.DIVISAO); {

      if  (operacao === OperacoesMatematicas.ADICAO) {
        return adicao(operacao1, operacao2);
      }  

      if (operacao === OperacoesMatematicas.SUBTRACAO) {
        return subtracao(operacao1, operacao2);
      }

      if (operacao === OperacoesMatematicas.MULTIPLICACAO) {
        return multiplicacao(operacao1, operacao2);
      }

      if (operacao === OperacoesMatematicas.DIVISAO) {
        return divisao(operacao1, operacao2);
      }

        return 'Unknown operation';
    }
  }
  
  /**
   * Gonçalo = Refatorou o código.
   * Adiciona dois números.
   * @param {number} a - O primeiro número.
   * @param {number} b - O segundo número.
   * @return {number} A soma dos números.
   */
  function adicao(a, b) {
    return a + b;
  }
  
  /**
   * Juliana = Refatorou o código.
   * Subtrai o segundo número do primeiro.
   * @param {number} a - O primeiro número.
   * @param {number} b - O segundo número.
   * @return {number} A diferença dos números.
   */
  function subtracao(a, b) {
    return a - b;
  }
  
  /**
   * Juliana = Refatorou o código.
   * Multiplica dois números.
   * @param {number} a - O primeiro número.
   * @param {number} b - O segundo número.
   * @return {number} O produto dos números.
   */
  function multiplicacao(a, b) {
    return a * b;
  }
  
  /**
   * Gonçalo = Refatorou o código.
   * Divide o primeiro número pelo segundo.
   * @param {number} a - O primeiro número.
   * @param {number} b - O segundo número.
   * @return {number|string} O quociente dos números ou uma mensagem de erro se a divisão por zero for tentada.
   */
  function divisao(a, b) {
    if (b === 0) {
      return 'Error: Division by zero';
    }
    return a / b;
  }
  
  // Testes
  console.log(calcular(OperacoesMatematicas.ADICAO, 2, 3));      // 5
  console.log(calcular(OperacoesMatematicas.SUBTRACAO, 2, 3)); // -1
  console.log(calcular(OperacoesMatematicas.MULTIPLICACAO, 2, 3)); // 6
  console.log(calcular(OperacoesMatematicas.DIVISAO, 2, 0));   // Error: Division by zero
  console.log(calcular(OperacoesMatematicas.DIVISAO, 2, 3));   // 0.666...
  console.log(calcular('modular', 2, 3));               // Unknown operation