// 1143. 最长公共子序列
// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
var longestCommonSubsequence = function(text1, text2) {
  let len1 = text1.length
  let len2 = text2.length
  let arr = new Array(len1+1).fill(() => new Array(len2+1).fill(0))
  let max = 0
  for(let i = 1; i <= len1; i++) {
    for(let j = 1; j <= len2; j++) {
      if(text1[i-1] === text2[j - 1]) {
        arr[i][j] = arr[i-1][j-1] + 1
      } else {
        arr[i][j] = Math.max(arr[i][j-1], arr[i - 1][j])
      }
    }
  }
  return arr[i][j]
};