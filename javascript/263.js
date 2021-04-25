// 263. 丑数

// 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。

/**
 * @param {number} n
 * @return {boolean}
*/
var isUgly = function(n) {
  let i = 2
  while(i <= n) {
    if(n % i === 0) {
      if(i !== 2 && i !== 3 && i !== 5) {
        return false
      }
      n /= i
      i = 2
    } else {
      i++
    }
  }
  return true
};
console.log(isUgly(6), true)
console.log(isUgly(7), false)
console.log(isUgly(1), true)
console.log(isUgly(14), false)