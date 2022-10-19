/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
  let arr = [], j = 0
  for(let i = 1; i <= n; i++) {
    if(j === target.length) break
    if(target[j] === i) {
      arr.push("Push")
      j++
    } else {
      arr.push("Push")
      arr.push("Pop")
    }
  }
  return arr
};