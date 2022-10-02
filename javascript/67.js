/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  let s = "", minus = 0,al = a.length - 1, bl = b.length - 1, ml = Math.max(al, bl)
  for(let i = 0; i <= ml; i++) {
    let l = minus
    if(al - i >= 0) {
      l += +a[al-i]
    }
    if(bl - i >= 0) {
      l += +b[bl-i]
    }
    if(l >= 2) {
      l -= 2
      minus = 1
    } else {
      minus = 0
    }
    s = l + s
  }
  if(minus) {
    s = 1 + s
  }
  return s
};