// 剑指 Offer 42. 连续子数组的最大和

// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。
// 动态规划
var maxSubArray = function(nums) {
  let length = nums.length
  let max = nums[0]
  for(let i = 1; i < length; i++) {
    if(nums[i-1] > 0) nums[i] = nums[i] + nums[i-1]
    max = Math.max(nums[i], max)
  }
  return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6)
console.log(maxSubArray([-2,1,-3,4,-1,2,1,1,4]), 11)
console.log(maxSubArray([-2,1,-3,4,-1,2,1,1,-1]), 7)
console.log(maxSubArray([-2,1,-1,4,-1,2,1,1,-1]), 7)
console.log(maxSubArray([-2]), -2)
console.log(maxSubArray([-2, -1]), -1)
console.log(maxSubArray([-2, -1, 0 ,1]), 1)
console.log(maxSubArray([-2,3]), 3)
console.log(maxSubArray([-2,3,2]), 5)
console.log(maxSubArray([-2,3,-2]), 3)
console.log(maxSubArray([-2,3,-2,4]), 5)
console.log(maxSubArray([-2,3,-2,2]), 3)
console.log(maxSubArray([1,-1,1]), 1)
console.log(maxSubArray([-3,1,-2,2]), 2)
console.log(maxSubArray([-3,1,-2,1,2]), 3)
