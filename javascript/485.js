// 485. 最大连续1的个数
// 给定一个二进制数组， 计算其中最大连续1的个数。
var findMaxConsecutiveOnes = function(nums) {
  let arr = []
  let max = 0
  let length = nums.length
  for(let i = 0; i < length; i++) {
    if(nums[i] === 0) {
      max = Math.max(arr.length, max)
      arr = []
    } else {
      arr.push(nums[i])
    }
  }
  max = Math.max(arr.length, max)
  arr = null
  return max
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))