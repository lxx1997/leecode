/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
  if(!s) return 0
  let a = 0, b = 0, l = s.length
  for(let i = 0; i < l; i++) {
    if(s[i] === "(") {
      a++
    }
    if(s[i] === ")") {
      if(a) a--
      else b++
    }
  }
  return a + b
};