// 43. 字符串相乘
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0'
  let l = num2.length - 1, length = num2.length - 1
  let res = ''
  while(l >= 0) {
    let result = multiplyFunction(num1, +num2[l], length - l)
    res = res ? addFunction(res, result) : result
    l--
  }
  return res
};

function multiplyFunction(num1, num2, index) {
  let r1 = num1.length - 1, multiple = 0
  if(num2 === '0') return ''.padStart(r1 + index, 0)
  let res = ''
  while(r1 >= 0) {
    let result = +num1[r1--] * num2 + multiple
    let mod = result % 10
    res = mod + res
    multiple = result > 9 ? (result - mod)  / 10 : 0
  }
  if(multiple > 0) {
    res = multiple + res
  }
  while(index-- > 0) {
    res += '0'
  }
  return res
}

function addFunction(num1, num2) {
  let len1 = num1.length - 1, len2 = num2.length - 1
  let multiple = 0, res = ''
  while(len1 >= 0 && len2 >= 0) {
    let result = +num1[len1--] +  +num2[len2--] + multiple
    res = result % 10 + res
    multiple = result > 9 ? 1 : 0
  }
  while(len1 >= 0) {
    let result = +num1[len1--] + multiple
    res = result % 10 + res
    multiple = result > 9 ? 1 : 0
  }
  while(len2 >= 0) {
    let result = +num2[len2--] + multiple
    res = result % 10 + res
    multiple = result > 9 ? 1 : 0
  }
  if(multiple > 0) {
    res = multiple + res
  }
  return res
}

console.log(multiply('2', '2'), 4)
console.log(multiply('123', '456'), 56088)
console.log(multiply('0', '456'), 0)
console.log(multiply('123', '0'), 0)
console.log(multiply("123456789", "987654321"), "121932631112635269")

