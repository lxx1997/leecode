// 561 数组拆分
// 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。

var arrayPairSum = function(nums) {
  nums = nums.sort((a, b) => a-b)
  let length = nums.length, total = 0
  for(let i = 0; i < length; i = i + 2) {
    total += nums[i]
  }
  return total
};

console.log(arrayPairSum([1,4,3,2]))