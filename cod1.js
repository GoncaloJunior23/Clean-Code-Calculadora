function calc(op, x, y) {
    if (op == "adicao") {
      return x + y;
    } else if (op == "subtracao") {
      return x - y;
    } else if (op == "multiplicacao") {
      return x * y;
    } else if (op == "divisao") {
      if (y == 0) {
        return "Error";
      } else {
        return x / y;
      }
    } else {
      return "Unknown operation";
    }
  }
  
  console.log(calc("adicao", 2, 3)); // 5
  console.log(calc("subtracao", 2, 3)); // -1
  console.log(calc("multiplicacao", 2, 3)); // 6
  console.log(calc("divisao", 2, 0)); // Error
  console.log(calc("divisao", 2, 3)); // 0.666...
  console.log(calc("modular", 2, 3)); // Unknown operation