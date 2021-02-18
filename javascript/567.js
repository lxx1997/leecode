// 567. 字符串的排列
// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
// 换句话说，第一个字符串的排列之一是第二个字符串的子串。

var checkInclusion = function(s2, s1) {
  function equal(obj1, obj2)  {
    let length = Object.keys(obj1).length ===  Object.keys(obj2).length
    if(!length) return false
    return Object.keys(obj1).every(item => obj1[item] === obj2[item])
  }
  let mapS2 = {}
  for(let i = 0; i < s2.length; i++) {
    if(mapS2[s2[i]]) mapS2[s2[i]]++
    else mapS2[s2[i]] = 1 
  }
  let mapS1 = {}
  let n = s1.length
  let right = s2.length - 1, left = 0
  let s = s1.substring(left, right)
  for(let i = 0; i < s.length; i++) {
    if(mapS1[s[i]]) mapS1[s[i]]++
    else mapS1[s[i]] = 1 
  }
  while(right < n) {
    s += s1[right]
    if(mapS1[s1[right]]) mapS1[s1[right]]++
    else mapS1[s1[right]] = 1 
    if (equal(mapS2, mapS1)) {
      return true
    }
    s = s.slice(1)
    mapS1[s1[left]]--
    if(mapS1[s1[left]] === 0) delete mapS1[s1[left]]
    right++
    left++
  }
  return false
};

console.log(checkInclusion("adc","dcdda"))