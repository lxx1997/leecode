/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
  arr = arr.sort((a,b) => a - b)
  let length = arr.length
  let start = length * 0.05
  let total = 0
  for(let i = start; i < length - start; i++) {
    total += arr[i]
  }
  return Number((total / (length - start * 2)))
};