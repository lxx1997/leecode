// 10. 正则表达式匹配
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

var isMatch = function(s, p) {
  let indexs = 0, indexp = 0
  let length = s.length
  while(indexs < length) {
    if(p[indexp] === '.') {
      indexs++
      p[indexp + 1] !== '*' && indexp++
    } else {
      if(p[indexp] === s[indexs]) {
        indexs++
        p[indexp + 1] !== '*' && indexp++
      } else {
        if(p[indexp + 1] !== '*') {
          return false
        } else {
          indexp += 2
        }
      }
    }
  }
  if(p.length - indexp === 2 && !s[indexs]) {
    return true
  }
  console.log(indexp,p.length, indexs)
  if(!s[indexs] && p[p.length - 1] !== '*' && !p[indexp]){
    return true
  }
  return false
};

console.log(isMatch("mississippi", "mis*is*p*."), false)
console.log(isMatch("ab", ".*c"), false)
console.log(isMatch("ab", "a"), false)
console.log(isMatch("ab", "a*"), false)
console.log(isMatch("aa", "a*"), true)
console.log(isMatch("ab", "a."), true)
console.log(isMatch("ab", "ab"), true)
console.log(isMatch("aaa", "aaaa"), false)
console.log(isMatch("aaa", "a*a"), true)
