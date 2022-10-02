/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
  if(s1.length !== s2.length) { return false}
  const hash = {}
  for(let i = 0; i < s1.length; i++) {
      let item1 = s1[i], item2 = s2[i]
    if(!hash[item1]) hash[item1] = 0
    hash[item1]++
    if(!hash[item2]) hash[item2] = 0
    hash[item2]--
  }
  return Object.keys(hash).every(item => hash[item] === 0)
};