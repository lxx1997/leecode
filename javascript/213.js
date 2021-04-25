// 213. 打家劫舍 II
// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。

var rob = function(nums) {
  let length = nums.length
  if(length === 1) return nums[0]
  let arr = [0, 0, nums[0]]
  for(let i = 1; i < length - 1; i++) {
    arr[i + 2] = Math.max(arr[i - 1] + nums[i], arr[i] + nums[i], arr[i + 1])
  }
  let arr2 = [0, 0, nums[1]]
  for(let i = 2; i < length; i++) {
    arr2[i + 1] = Math.max(arr2[i - 2] + nums[i], arr2[i -1] + nums[i], arr2[i])
  }
  return Math.max(arr[length], arr2[length])
};
console.log(rob([2,2,3]))