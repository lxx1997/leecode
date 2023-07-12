/**
 * @param {number[][]} nums
 * @return {number}
 */
 var matrixSum = function(nums) {
  let m = nums.length
  let n = nums[0].length
  nums = nums.map(num => num.sort((a , b) => b - a))
  let total = 0
  for(let i = 0; i < n; i++) {
    let max = 0
    for(let j = 0; j < m; j++) {
      max = Math.max(nums[j][i], max)
    }
    total += max
  }
  return total
};