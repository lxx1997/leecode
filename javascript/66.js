/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let l = digits.length, minus = 1
  for(let i = l - 1; i >= 0; i--) {
    if(digits[i] + 1 > 9) {
      digits[i] = 0
      minus = 1
    } else {
      digits[i] += minus
      minus = 0
    }
  }
  if(digits[0] > 9) {
    digits[0] = 0
    return [1, ...digits]
  }
  return digits
};