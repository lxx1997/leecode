/**
 * 子数组最大平均数 I
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数
 * 输入：[1,12,-5,-6,50,3], k = 4
 * 输出：12.75
 * 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let length = nums.length
  let maxAerage = getAverage(nums.slice(0,k))
  let last = maxAerage
  for(let i = 1; i <= length - k; i++) {
    let down = nums[i+k-1] - nums[i-1]
    last += down
    if(down > 0) {
      maxAerage += down
    }
  }
  return maxAerage / k
};

function getAverage(nums) {
  let sum = 0
  let length = nums.length
  let i = 0
  while(i < length) {
    sum += nums[i]
    i++
  }
  return sum/length
}