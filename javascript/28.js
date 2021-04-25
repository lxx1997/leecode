// 28. 实现 strStr()

// 实现 strStr() 函数。
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
// 说明：
// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//  var strStr = function(haystack, needle) {
//   if(needle === '') return 0
//   let left = 0, right = 0, l1 = haystack.length, l2 = needle.length
//   while(left < l1) {
//     if(haystack[left] === needle[right]) {
//       while(right < l2) {
//         if(haystack[left + right] !== needle[right++]) {
//           left++
//           right = 0
//           break
//         }
//       }
//       if(right === l2) return left
//     } else {
//       left++
//     }
//   }
//   return -1
// };

// console.log(strStr('a',''), 0)
// console.log(strStr('hello','ll'), 2)
// console.log(strStr('aaaa','aab'), -1)

// KMP算法
var strStr = function(haystack, needle) {
  const len1 = haystack.length, len2 = needle.length
  if(len2 === 0) return 0
  let arr = new Array(len2).fill(0)
  for(let i = 1, j = 0; i < len2; i++) {
    while(j > 0 && needle[i] !== needle[j]) {
    // 看前面是否存在重合的头部，如果存在则不需要重新对比
      j = arr[j-1]
    }
    if(needle[i] === needle[j]) {
      j++
    }
    arr[i] = j
  }
  for(let i = 0, j = 0; i < len1; i++) {
    while(j > 0 && haystack[i] !== needle[j]) {
      j = arr[j - 1]
    }
    if(haystack[i] === needle[j]) {
      j++
    }
    if(j === len2) {
      return i - len2 + 1
    }
  }
  return -1
};
console.log(strStr("mississippi","issip"), 4)