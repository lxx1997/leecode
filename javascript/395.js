// 395. 至少有K个重复字符的最长子串 
// 找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。

var longestSubstring = function(s, k) {
  let length = s.length
  let max = 0
  return diff(s, length, k, max)
};

function diff(s,length,k, max) {
  let i = 0
  let maps = {}
  while(i < length) {
    if(!maps[s[i]]) maps[s[i]] = 1
    else {
      maps[s[i]]++
    }
    i++
  }
  for(let key in maps) {
    if(maps[key] < k) {
      let reg = new RegExp(key, 'g')
      s = s.replace(reg, ',')
    }
  }
  if(s.indexOf(',') === -1) return Math.max(s.length, max)
  s.split(',').map(item => {
    console.log(item)
    let l = item.length
    if(l >= k) {
      let ret = diff(item, l, k, max)
      max = Math.max(ret, max)
    }
    return item
  })
  return max
}
console.log(longestSubstring("abcbbabaaa",3)) 