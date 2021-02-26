// 1178. 猜字谜
// 外国友人仿照中国字谜设计了一个英文版猜字谜小游戏，请你来猜猜看吧。

// 字谜的迷面 puzzle 按字符串形式给出，如果一个单词 word 符合下面两个条件，那么它就可以算作谜底：

// 单词 word 中包含谜面 puzzle 的第一个字母。
// 单词 word 中的每一个字母都可以在谜面 puzzle 中找到。
// 例如，如果字谜的谜面是 "abcdefg"，那么可以作为谜底的单词有 "faced", "cabbage", 和 "baggage"；而 "beefed"（不含字母 "a"）以及 "based"（其中的 "s" 没有出现在谜面中）。
// 返回一个答案数组 answer，数组中的每个元素 answer[i] 是在给出的单词列表 words 中可以作为字谜迷面 puzzles[i] 所对应的谜底的单词数目。
// var findNumOfValidWords = function(words, puzzles) {
//   let wordsLength = words.length
//   let wordsMap = new Array(wordsLength)
//   let puzzlesLength = puzzles.length
//   let lengthArray = new Array(puzzlesLength).fill(0)
//   for(let i = 0; i < wordsLength; i++) {
//     wordsMap[i] = {}
//     for(let val of words[i]) {
//       wordsMap[i][val] = 1
//     }
//   }
//   for(let i = 0; i < puzzlesLength; i++) {
//     for(let j = 0; j < wordsLength; j++) {
//       if(wordsMap[j][puzzles[i][0]]) {
//         if(Object.keys(wordsMap[j]).every(item => puzzles[i].includes(item))) lengthArray[i]++
//       }
//     }
//   }
//   return lengthArray
// };

var findNumOfValidWords = function(words, puzzles) {
  let wordsLength = words.length
  let wordsMap = new Array(wordsLength)
  let puzzlesLength = puzzles.length
  let lengthArray = new Array(puzzlesLength).fill(0)
  for(let i = 0; i < wordsLength; i++) {
    let bit = getBit(words[i])
      if(wordsMap[bit]) wordsMap[bit]++
      else wordsMap[bit] = 1
    
  }
  for(let i = 0; i < puzzlesLength; i++) {
    let first = getBit(puzzles[i][0])
    let bit = getBit(puzzles[i])
    let n = bit
    while(n > 0) {
      if((n & first) != 0 && wordsMap[n] > 0) {
        lengthArray[i] += wordsMap[n]
      }
      n = (n-1) & bit
    }
  }
  return lengthArray
};

function getBit(nums) {
  let arr = 0
  for(let val of nums) {
    let offset = val.charCodeAt(0) - 97
    let status = 1 << offset
    arr = arr | status
  }
  return arr
}

console.log(findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access"], ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]))
console.log(findNumOfValidWords(["apple","pleas","please"], ["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"]))