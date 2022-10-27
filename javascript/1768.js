/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
  let word = ""
  let length = Math.min(word1.length, word2.length)
  let i = 0
  for(; i < length; i++) {
    word += word1[i] + word2[i]
  }
  if(i < word1.length) {
    word += word1.slice(i)
  }
  if(i < word2.length) {
    word += word2.slice(i)
  }
  return word
};