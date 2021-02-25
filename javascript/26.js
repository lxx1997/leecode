// 26. 删除排序数组中的重复项
// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
var removeDuplicates = function(nums) {
  let i = 0, j = 1
  let length = nums.length
  for(let j = 1;j < length; j++) {
    if(nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  nums.length = i + 1
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))