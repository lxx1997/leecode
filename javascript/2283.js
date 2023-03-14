/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
  let hash = new Array(num.length).fill(0)
  for(let i = 0; i < num.length; i++) {
    let n = num[i]
    hash[n]++
  }
  for(let i = 0; i < num.length; i++) {
    let n = num[i]
    if(n != hash[i]) {
      return false
    }
  }
  return true
};