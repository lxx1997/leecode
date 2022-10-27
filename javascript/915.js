/**
 * @param {number[]} nums
 * @return {number}
 */
 var partitionDisjoint = function(nums) {
  let max = [nums[0]], min = [];
  min[nums.length-1] = nums[nums.length - 1]
  for(let i = 1; i < nums.length; i++) {
    if(max[i - 1] < nums[i]) {
      max[i] = nums[i] 
    } else {
      max[i] = max[i - 1]
    }
  }
  for(let i = nums.length - 2; i >= 0; i--) {
    if(min[i + 1] > nums[i]) {
      min[i] = nums[i] 
    } else {
      min[i] = min[i + 1]
    }
  }
  for(let i = 0; i < nums.length - 1; i++) {
    if(max[i] <= min[i + 1] ) {
      return i + 1
    }
  }
  return 1
};