// 7. 整数反转
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let flag = x >= 0
  if(!flag) x = -x
  let str = ''
  while(x) {
    let mod = x % 10
    str += mod
    x = (x - mod) / 10
  }
  let num = Number(str)
  if(num > Math.pow(2, 31) - 1 || num < -Math.pow(2, 31)) {
    return 0
  }
  return flag ? num : -num
};
console.log(reverse(-1234567890))
console.log(reverse(123), 321)
console.log(reverse(-123), -321)
console.log(reverse(120), 21)
console.log(reverse(0), 0)
console.log(reverse(1563847412))