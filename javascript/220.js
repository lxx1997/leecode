// 220. 存在重复元素 III
// 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

// 如果存在则返回 true，不存在返回 false。
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let length = nums.length
  for(let i = 0; i < length; i++) {
    for(let j = i + 1; j < length && j <= i + k; j++) {
      if(Math.abs(nums[i] - nums[j]) <= t) return true
    }
  }
  return false
};

console.log(containsNearbyAlmostDuplicate(nums = [1,2,3,1], k = 3, t = 0), true)
console.log(containsNearbyAlmostDuplicate(nums = [1,0,1,1], k = 1, t = 2), true)
console.log(containsNearbyAlmostDuplicate(nums = [1,5,9,1,5,9], k = 2, t = 3), false)