// 55. 跳跃游戏
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let length = nums.length
  let arr = [], right = 0
  for(let i = 0; i < length; i++) {
    arr[i] = nums[i] + i
    right = Math.max(right, arr[i])
    if(right >= length - 1) return true
    if(arr[i] === i && i >= right) {
      return false
    }
  }
  return true
};
console.log(canJump([3,2,1,0,1,4]), false)
console.log(canJump([2,0,0]), true)
console.log(canJump([2,0,1,0,1]), false)
console.log(canJump([3,0,8,2,0,0,1]), true)