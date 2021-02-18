// 395. 至少有K个重复字符的最长子串
// 找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。

var longestSubstring = function(s, k) {
  let strMap = {}
  let right = 0
  let n = s.length
  while(right < n) {
    if(!strMap[s[right]]) strMap[s[right]] = 0
    strMap[s[right]]++
    right++
  }
  let arr = Object.keys(strMap)
  if(arr.every(item => strMap[item] >= k)) return s.length
  arr.map(item => {
    console.log(strMap[item], item)
    if(strMap[item] < k) {
      s.split(item).reduce((total, item) => {
        console.log(total,item)
        if(item && (total.length < item.length)) {
          s = item
          return item
        } else {
          s = total
          return total
        }
      })
      return item
    }
  })
  console.log(s)
  let length = longestSubstring(s, k)
  return length
};
console.log(longestSubstring("aaaaaaaaaaaabcdefghijklmnopqrstuvwzyz",3))