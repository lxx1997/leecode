// 150. 逆波兰表达式求值
// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
// 说明：
// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  let right = 0
  while(right < tokens.length) {
    switch(tokens[right]) {
      case '-':
        tokens[right - 2] = tokens[right - 2] - tokens[right-1]
        tokens.splice(--right, 2)
        break;
      case '+':
        tokens[right - 2] = tokens[right - 2] + tokens[right-1]
        tokens.splice(--right, 2)
        break;
      case '*':
        tokens[right - 2] = tokens[right - 2] * tokens[right-1]
        tokens.splice(--right, 2)
        break;
      case '/':
        tokens[right - 2] = (tokens[right - 2] - tokens[right - 2] % tokens[right-1]) / tokens[right-1]
        tokens.splice(--right, 2)
        break;
      default:
        tokens[right] = tokens[right]-0
        right++
        break;
    }
  }
  return Number(tokens[0])
};

console.log(evalRPN(["2","1","+","3","*"]))
console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
console.log(evalRPN(["4","-2","/","2","-3","-","-"]))