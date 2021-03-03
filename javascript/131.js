// 131. 分割回文串
// 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
// 返回 s 所有可能的分割方案。

var partition = function(s) {
  let arr = []

  arr.push(s.split(''))
  return arr
};

function computedReverse(strs, left, right) {
  while(left < right){
    if(strs[left] != strs[right]) return false
    left++
    right--
  }
  return true
}