/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  let stack = [], left = 0, right = 0, max = 0, total = 0
  while(left <= right && right < s.length) {
    if(s[right] === ")") {
      if(stack.length === 0) {
        max = Math.max(right - left, max)
        stack = []
        right++
        left = right
      } else {
        right++
        stack.pop()
        max = Math.max(right - (stack.length ? stack[stack.length - 1] : left), max)
      }
    } else {
      right++
      stack.push(right)
    }
  }
  if(stack.length) {
    return Math.max(right - stack[stack.length - 1], max)
  }
  return Math.max(right - left, max)
};