// 392. 判断子序列
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 进阶：

// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

var isSubsequence = function(s, t) {
  let i = 0, j = 0
  let il = t.length
  let jl = s.length
  while(i < il) {
    if(t[i] === s[j]) j++
    i++
    if(j === jl) return true
  }
  return false
};
console.log(isSubsequence(s = "abc", t = "ahbgdc"), true)
console.log(isSubsequence(s = "ac", t = "ahbgdcb"), false)