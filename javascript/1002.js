// 1002. 查找常用字符
// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
// 你可以按任意顺序返回答案。
var commonChars = function(A) {
  let hashs = []
  for(let i = 0; i < A.length; i++) {
    hashs[i] = {}
      for(let j = 0; j < A[i].length; j++) {
        if(!hashs[i][A[i][j]]) hashs[i][A[i][j]] = 0
        hashs[i][A[i][j]]++
      }
  }
  let arr = []
  Object.keys(hashs[0]).map(item => {
    let min = Infinity
    for(let i = 0; i < hashs.length; i++) {
      if(!hashs[i][item]) return item
      else min = Math.min(min, hashs[i][item])
    }
    while(min > 0) {
      arr.push(item)
      min--
    }
  })
  return arr
};
console.log(commonChars(["bella","label","roller"]))
console.log(commonChars(["cool","lock","cook"]))