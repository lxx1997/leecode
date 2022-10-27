/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let zeroL = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      for(let j = i; j > 0; j--) {
        if(nums[j - 1] === 0) {
          [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
        } else {
          break;
        }
      }
    } else {
      zeroL++
    }
  }
  for(let i = nums.length - 1; i > nums.length - 1 - zeroL; i--) {
      nums[i] = 0
  } 
};