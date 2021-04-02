// 131. 分割回文串
// 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
// 返回 s 所有可能的分割方案。

var partition = function(s) {
  let arr = [], j = 0
  if(computedReverse(s)) {
    arr.push([s])
    j++
  }
  let length = s.length
  s = s.split('')
  let left = 0, right = 1
  let start = 1
  arr[j] = []
  while(right < length) {
    if(computedReverse(s.splice(left, right))) {
      arr[j].push(s.splice(left, right))
      left = right
      right++
    } else {
      right++
    }
    if(right === length) {
      if(computedReverse(s.splice(left, right))) {
        arr[j].push(s.splice(left, right))
        right = ++start
        left = 0
        j++
        arr[j] = []
      } else {
        right = ++start
        left = 0
        arr[j] = []
      }
    }
  }
  return arr
};

function computedReverse(strs, left = 0, right = strs.length - 1) {
  while(left < right){
    if(strs[left] != strs[right]) return false
    left++
    right--
  }
  return true
}

console.log(partition('aab'))