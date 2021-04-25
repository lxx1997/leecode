// 91. 解码方法
// 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

// "AAJF" ，将消息分组为 (1 1 10 6)
// "KJF" ，将消息分组为 (11 10 6)
// 注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

// 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

// 题目数据保证答案肯定是一个 32 位 的整数。

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if(s[0] === '0') return 0
  let length = s.length
  let arr = new Array(length + 1).fill(1)
  for(let i = 1; i < length; i++) {
    let pre = +s[i-1], next = +s[i]
    switch (pre){
      case 0:
        if(next === 0) return 0
        else arr[i + 1] = arr[i]
        break;
      case 1:
        if(next === 0) arr[i + 1] = arr[i - 1]
        else arr[i + 1] = arr[i - 1] + arr[i]
        break;
      case 2:
        if(next === 0) {
          arr[i + 1] = arr[i - 1]
        } else if(next > 0 && next < 7) {
          arr[i + 1] = arr[i - 1] + arr[i]
        } else {
          arr[i + 1] = arr[i]
        }
        break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        if(next === 0) return 0
        else arr[i + 1] = arr[i]
        break;
      default:
        break;
    }
  }
  return arr[length]
};
console.log(numDecodings('1'),1)
console.log(numDecodings('12'),2)
console.log(numDecodings('122'),3)
console.log(numDecodings('1226'),5)
console.log(numDecodings('12265'),5)
console.log(numDecodings('122652'),5)
console.log(numDecodings('1226522'),10)
console.log(numDecodings('12265220'),10)
console.log(numDecodings('122652201'),10)