/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let stack = [], map = {
    ")": "(",
    "]": "[",
    "}": "{"
  }
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if([")", "]","}"].includes(c)) {
      if(stack.length > 0 && map[c] === stack[stack.length - 1] ) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
};