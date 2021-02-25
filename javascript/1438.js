// 1438. 绝对差不超过限制的最长连续子数组
// 给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

// 如果不存在满足条件的子数组，则返回 0 。

var longestSubarray = function(nums, limit) {
  let max = 0
  let length = nums.length
  let maxArray = [], minArray = []
  let i = 0, j = 0
  while( i < length) {
    while(maxArray.length && maxArray[maxArray.length - 1] < nums[i]) {
      maxArray.pop()
    }
    while(minArray.length && minArray[minArray.length - 1] > nums[i]) {
      minArray.pop()
    }
    maxArray.push(nums[i])
    minArray.push(nums[i])
    while(maxArray.length && minArray.length && maxArray[0] - minArray[0] > limit) {
      if(nums[j] === minArray[0]) {
        minArray.shift()
      }
      if(nums[j] === maxArray[0]) {
        maxArray.shift()
      }
      j++
    }
    console.log(minArray, maxArray)
    max = Math.max(max, i - j + 1)
    i++
  }
  return max
};
console.log(longestSubarray(nums = [1,5,6,7,8,10,6,5,6], limit = 4))
console.log(longestSubarray(nums = [8,2,4,7], limit = 4))
console.log(longestSubarray(nums = [10,1,2,4,7,2], limit = 5))
