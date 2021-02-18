// 665. 非递减数列
/**
 * 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
 * 我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
 * 
 * 输入: nums = [4,2,3]
 * 输出: true
 * 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
 */
var checkPossibility = function(nums) {
  let isUse = false
  if(nums.length <= 2) return true
  if(nums[1] < nums [0]) isUse = true
  for(let i = 2; i < nums.length; i++) {
    if(nums[i] < nums[i-1]) {
      if(isUse) return false
      if(nums[i] < nums[i-2] && ( i < nums.length - 1 ? nums[i + 1] < nums[i - 1] : false) ) {
        return false
      }
      isUse = true
    }
  }
  return true
};

console.log(checkPossibility([4,2,3]), 'true')
  console.log(checkPossibility([3,4,2,3]), 'false')
  console.log(checkPossibility([-1,4,2,3]), 'true')
  console.log(checkPossibility([3,4,2,5]), 'true')