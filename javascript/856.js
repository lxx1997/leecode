/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  let stack = [0]
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "(") {
      stack.push(0)
    } else {
      let v = stack.pop()
      let deep = stack.pop() + Math.max(2 * v, 1)
      stack.push(deep)
    }
  }
  return stack[0]
};

// console.log(scoreOfParentheses("(())(()())"))
console.log(scoreOfParentheses("(()(()))"))