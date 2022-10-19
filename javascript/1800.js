/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
  let left = 1, max = nums[0], total = nums[0]
  while(left < nums.length) {
    if(nums[left] > nums[left - 1]) {
      total += nums[left]
    } else {
      max = Math.max(total, max)
      total = nums[left]
    }
    left++
  }
  return Math.max(total, max)
};