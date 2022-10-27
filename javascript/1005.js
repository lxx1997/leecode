/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
  let min = Infinity;
  nums = nums.sort((a, b) => a - b)
  for(let i = 0; i < nums.length; i++) {
    if(k > 0 && nums[i] < 0 ) {
      nums[i] = -nums[i]
      k--
    }
    if(k > 0) {
      min = Math.min(min, nums[i])
    }
  }
  let total = nums.reduce((total, item) => total += item, 0)
  if(k % 2 === 0) return total
  return total - min * 2
};