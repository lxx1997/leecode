/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
  const length = s.length, strHash = {}
  for(let i = 0; i < length;i++) {
    if(!strHash[s[i]]) {
      strHash[s[i]] = []
    }
    strHash[s[i]].push(i)
  }
  let max = 0
  if(Object.values(strHash).every(item => item.length === 1)) return -1
  Object.values(strHash).forEach(item => {
    max = Math.max(item[item.length - 1] - item[0] - 1, max)
  })
  return max
};