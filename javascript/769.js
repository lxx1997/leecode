/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let max = 0, total = 0
  for(let i = 0; i < arr.length; i++) {
    let item = arr[i]
    max = Math.max(item, max)
    if(max === i) total++
  }
  return total
};