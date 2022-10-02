/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  if(nums[0] > target) return 0
  if(nums[nums.length - 1] < target) return nums.length
  let left = 0, right = nums.length - 1, half = nums.length >> 1
  while(left < right) {
    if(nums[half] < target) {
      left = half + 1
    } else if(nums[half] === target) {
        return half
    } else {
      right = half - 1
    }
    half = (left + right) >> 1
  }
  return nums[half] < target ? half + 1 : half
};