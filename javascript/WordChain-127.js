// 单词接龙

var ladderLength = function(beginWord, endWord, wordList) {
  function computedWord(word1, word2) {
    let some = 0
    for(let i = 0;i < word1.length; i++) {
      if(word1[i] !== word2[i]) {
        some++
      }
    }
    return some === 1
  }
  function isHas(word,selectWord) {
    return !(selectWord.some(item => {
      item = Array.from(item)
      return item.some(items => items === word)
    }))
  }
  let length = 1
  let selectWord = [[beginWord]]
  if(~wordList.indexOf(endWord)) {
    while(selectWord[length - 1].indexOf(endWord) === -1) {
      selectWord[length] = new Set()
      // 将所有只有一位不一样的存放到下一个数组中
      selectWord[length-1].map(item => {
        for(let i = 0; i < wordList.length; i++ ) {
          if(computedWord(item, wordList[i]) && isHas(wordList[i],selectWord)) {
            selectWord[length].add(wordList[i])
          }
        }
      })
      selectWord[length] = Array.from(selectWord[length])
      if(selectWord[length].length === 0) {
        length = 0
        break;
      }
      length++
    }
    console.log(selectWord)
    return length
  }else {
    return 0
  }
};

beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

console.log(ladderLength(beginWord, endWord, wordList))