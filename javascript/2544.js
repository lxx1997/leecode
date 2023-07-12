/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  const digst = []

  while(n > 0) {
    const mode = n % 10
    digst.unshift(mode)
    n = (n - mode) / 10
  }
  let total = 0
  for(let i = 0; i < digst.length; i++) {
    if(i % 2 === 0) {
      total += digst[i]
    } else {
      total -= digst[i]
    }
  } 
  return total
};