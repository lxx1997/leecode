// 46. 全排列
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

var permute = function(nums) {
  let length = nums.length
  let res = []
  for(let i = 0; i < length; i++) {
    dis(nums, [nums[i]], res, length, 1)
  }
  return res
};

function dis(nums = [],arr = [], res = [], length = nums.length, len = arr.length) {
  if(len === length) {
    res.push(arr)
    return
  }
  for(let i = 0; i < length; i++) {
    if(!arr.includes(nums[i])){
      dis(nums, [...arr, nums[i]],res, length)
    }
  }
}
console.log(permute([1,2,3]))
console.log(permute([1,2,3,4]))