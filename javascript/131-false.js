// 131. 分割回文串
// 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
// 返回 s 所有可能的分割方案。

var partition = function(s) {
  let length = s.length, arr = []
  // 记录 i 到 j 是否是回文字符串
  let isPartition = new Array(length).fill(0).map(item => new Array(length).fill(true))
  for(let i = 0; i < length; i++) {
    for(let j = i; j < length; j++) {
      isPartition[i][j] = computedReverse(s, i, j)
    }
  }
  for(let i = 0; i < length; i++) {
    for(let j = i; j < length; j++) {
      if(isPartition[i][j]) {
        dis(i + 1, [s.substring(0,i + 1)])
      }
    }
  }

  function dis(i, arrs) {
    if(i === length - 1) {
      arrs.push(s.substring(i,length))
      arr.push(arrs)
      return
    } 
    for(let j = i; j < length; j++) {
      if(isPartition[i][j]) {
        console.log(s.substring(i,j + 1))
        arrs.push(s.substring(i,j + 1))
        dis(j + 1, arrs.slice())
        arrs.pop()
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

console.log(partition('aabnaa'))