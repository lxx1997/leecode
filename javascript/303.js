// 303. 区域和检索 - 数组不可变
// 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。
// 实现 NumArray 类：
// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
var NumArray = function(nums) {
  this.nums = nums
  this.total = nums.reduce((total, item) => {
    total.push(total[total.length - 1] + item)
    return total
  })
  console.log(this.total)
};

NumArray.prototype.sumRange = function(i, j) {
  return this.total[j] - this.total[i] + this.nums[i]
};