// 面试题 17.16. 按摩师
// 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。
var massage = function(nums) {
  let length = nums.length
  let max = 0
  let dp = new Array(length + 3)
  dp[0] = dp[1] = dp[2] = 0
  for(let i = 0; i < length; i++) {
    dp[i + 3] = Math.max(dp[i+1], dp[i]) + nums[i]
    max = Math.max(dp[i + 3], max)
  }
  return max
};
console.log(massage([1]), 1)
console.log(massage([1,2]), 2)
console.log(massage([1,2,3,1]), 4)
console.log(massage([2,7,9,3,1]), 12)
console.log(massage([2,1,4,5,3,1,1,3]), 12)
console.log(massage([2,1,4,5,3,1,1]), 10)