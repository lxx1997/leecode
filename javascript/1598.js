/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let deep = 0
  for(let i = 0; i < logs.length; i++) {
    const item = logs[i]
    if(item === "../") {
      deep && deep--
    } else if(item !== "./") {
      deep++
    }
  }
  return deep
};