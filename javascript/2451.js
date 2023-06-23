/**
 * @param {string[]} words
 * @return {string}
 */
 var oddString = function(words) {
  let arr = []
  const changeWordToNum = (word) => {
    let array = []
    for(let i = 1; i < word.length; i++) {
      array[i - 1] = word[i].charCodeAt() - word[i -1].charCodeAt()
    }
    return array
  }
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    let str = changeWordToNum(element).toString()
    arr[i] = str
  }
  let compare = arr.shift()
  let hasSame = arr.some(i => i === compare)
  if(!hasSame) return words[0]
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== compare) {
      return words[i + 1]
    }
  }
  return ""
};