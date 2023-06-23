var mctFromLeafValues = function(arr) {
  let res = 0;
  let stack = [];
  for (let x of arr) {
      while (stack.length && stack[stack.length - 1] <= x) {
          let y = stack.pop();
          if (!stack.length || stack[stack.length - 1] > x) {
              res += y * x;
          } else {
              res += stack[stack.length - 1] * y;
          }
      }
      stack.push(x);
  }
  while (stack.length >= 2) {
      let x = stack.pop();
      res += stack[stack.length - 1] * x;
  }
  return res;
}