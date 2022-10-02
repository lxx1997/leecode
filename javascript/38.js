/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if(n === 1) {
    return "1"
  }
  let before = countAndSay(n-1), bs = "", bl = 0, s = ""
  for(let i = 0; i < before.length; i++) {
    if(bs !== before[i]) {
      s += (bl > 0 ? `${bl}${bs}` : "")
      bs = before[i]
      bl = 1
    } else {
      bl++
    }
  }
  s += `${bl}${bs}`
  return s
};

console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(5))
console.log(countAndSay(6))