/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  let arr = [0]
  for(let i = 1; i <= n; i++) {
    arr[i] = arr[i-1] + i
  }
  const total = arr[n]
  for(let i = 1; i <= n; i++) {
    if(arr[i] === total - arr[i] + i) {
      return i
    }
  }
  return -1
};