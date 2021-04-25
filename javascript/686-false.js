// 686. 重复叠加字符串匹配

// 给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。

// 注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var repeatedStringMatch = function(a, b) {
  if(b === '') return 0
  let l = 1, k = 1
  for(let i = 0; i < b.length; i++) {
    l |= 1 << (b[i].charCodeAt() - 96)
  }
  for(let i = 0; i < a.length; i++) {
    k |= 1 << (a[i].charCodeAt() - 96)
  }
  console.log(l,k)
  if(l !== k) return - 1
  let m = 1
  while(!a.repeat(m).includes(b)) {
    m++
  }
  return m
};

console.log(repeatedStringMatch("abcd","cdabcdab"))