/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var areAlmostEqual = function(s1, s2) {
  if(s1 === s2) return true
  if(s1.length !== s2.length) return false
  let d1 = "", d2 = "", hash = {}, index = 0
  for(let i = 0; i < s1.length; i++) {
    if(s1[i] !== s2[i]) {
      if(index > 2) return false
      index++
      if(!d1) {
        d1 = s1[i]
        d2 = s2[i]
      } else {
        if(d1 !== s2[i] || d2 !== s1[i]) {
          return false
        } else {
            d1 = ""
            d2 = ""
        }
      }
    }
  }
  if(d1) return false
  return true
};