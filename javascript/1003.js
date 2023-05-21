/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length % 3 !== 0) return false
  if(s.length === 0) return true
  while(s.length) {
    let index = s.indexOf("abc")
    if(index === -1) return false
    s = s.substring(0, index) + s.substring(index + 3, s.length)
  }
  return true
};

console.log(isValid("aabcbc"), true)
console.log(isValid("abcabcababcc"), true)