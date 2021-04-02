// 456. 132 模式
// 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。
// 如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。
// 进阶：很容易想到时间复杂度为 O(n^2) 的解决方案，你可以设计一个时间复杂度为 O(n logn) 或 O(n) 的解决方案吗？
var find132pattern = function(nums) {
  let length = nums.length
  if(length < 3) return false
  let maxNums = [[nums[0], 0]], minNums = [[nums[0], 0]]
  for(let i = 1; i < length; i++) {
    // if(nums[i] >= maxNums[i-1][0]) 

    // else if(nums[i] < maxNums[i-1][0]) maxNums.push(maxNums[i-1])
    maxNums[i] = [nums[i], i]
    if(nums[i] <= minNums[i-1][0]) minNums[i] = [nums[i], i]

    else if(nums[i] > minNums[i-1][0]) minNums[i] = minNums[i-1]
    if(i >= 2) {
        let j = i
        while(j > 0) { 
        if((minNums[j][1] < maxNums[j][1] && maxNums[j][1] < i) && (minNums[j][0] < nums[i] && nums[i] < maxNums[j][0])) return true
        j--
        }
    }
  }
  return false
};
console.log(find132pattern([3,1,4,2]))
console.log(find132pattern([1,2,3,4]))
console.log(find132pattern([1,4,0,-1,-2,-3,-1,-2]), true)
console.log(find132pattern([3,5,0,3,4]), true)
// 官方解法
// 单调栈
var find132pattern = function(nums) {
  const n = nums.length;
  const candidate_k = [nums[n - 1]]; // 存储最大数 即nums[j] 的可能序列
  let max_k = -Number.MAX_SAFE_INTEGER; // 存储最大数 nums[k]

  for (let i = n - 2; i >= 0; --i) {
      if (nums[i] < max_k) { // 对比最大数和当前数
          return true;
      }
      while (candidate_k.length && nums[i] > candidate_k[candidate_k.length - 1]) {
          max_k = candidate_k[candidate_k.length - 1];
          candidate_k.pop();
      }
      if (nums[i] > max_k) {
          candidate_k.push(nums[i]);
      }
  }
  return false;
};