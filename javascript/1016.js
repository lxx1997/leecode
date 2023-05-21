/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
  for(let i = n; i > 0; i--) {
    let str = i.toString(2)
    console.log(str)
    if(s.indexOf(str) === -1) {
      return false
    }
  }
  return true
};