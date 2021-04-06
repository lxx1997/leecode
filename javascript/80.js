// 80. 删除有序数组中的重复项 II

// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
var removeDuplicates = function(nums) {
  let length = nums.length
  let left = 0, right = 0, hash = {}
  while(right < length) {
    if(!hash[nums[right]]) {
      hash[nums[right]] = 0
    }
    if(hash[nums[right]] === 2) {
      right++
    } else {
      hash[nums[right]]++
      nums[left++] = nums[right++]
    }
  }
  nums.length = left
  return nums.length
};