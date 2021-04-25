// 1432. 改变一个整数能得到的最大差值
// 给你一个整数 num 。你可以对它进行如下步骤恰好 两次 ：

// 选择一个数字 x (0 <= x <= 9).
// 选择另一个数字 y (0 <= y <= 9) 。数字 y 可以等于 x 。
// 将 num 中所有出现 x 的数位都用 y 替换。
// 得到的新的整数 不能 有前导 0 ，得到的新整数也 不能 是 0 。
// 令两次对 num 的操作得到的结果分别为 a 和 b 。

// 请你返回 a 和 b 的 最大差值 。

/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
  let str = num + ''
  let first = ''
  let second = ''
  let i = 1
  while(i < str.length) {
    if(str[i] !== '9') {
      first = str[i]
      break
    }
    i++
  }
  while(i < str.length) {
    if(str[i] !== first && str[i] !== '9') {
      second = str[i]
      break
    }
    i++
  }
  let max, min
  if(second === '' || first !== '1') {
    max = str.replace(eval(`/${first}/g`), '9')
    min = str.replace(eval(`/${first}/g`), '1')
  } else {
    max = str.replace(eval(`/${first}/g`), '9')
    min = str.replace(eval(`/${second}/g`), '0')
  }
  console.log(max, min)
  return +max - +min
};
console.log(maxDiff(9280))