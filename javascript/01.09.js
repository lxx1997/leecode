/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
  if(s1.length !== s2.length) return false
  const ss = s2+s2
  return ss.indexOf(s1) !== -1
};