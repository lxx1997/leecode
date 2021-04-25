// 377. 组合总和 Ⅳ

// 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

// 题目数据保证答案符合 32 位整数范围。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// dfs 会超时
// var combinationSum4 = function(nums, target) {
//   let num = 0
//   function dps(total) {
//     if(total === 0) return ++num
//     if(total < 0) return
//     for(let i = 0; i < length; i++) {
//       dps(total - nums[i])
//     }
//   }
//   let length = nums.length
//   for(let i = 0; i < length; i++) {
//     dps(target - nums[i])
//   }
//   return num
// };

var combinationSum4 = function(nums, target) {
  let dep = new Array(target + 1).fill(0)
  dep[0] = 1
  for(let i = 0; i <= target; i++) {
    for(let num of nums) {
      if(num <= i) {
        dep[i] += dep[i - num]
      }
    }
  }
  return dep[target]
};

// console.log(combinationSum4([1,2,3], 4))
// console.log(combinationSum4([1,2,3], 9))
console.log(combinationSum4([2,1,3], 35))