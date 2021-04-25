// 179. 最大数

// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
var largestNumber = function(nums) {
  if(nums.length === 1) return nums[0] + ''
  let total = ''
  for(let i = 0; i < nums.length; i++) {
    total = max(total + nums[i], nums[i] + total)
  }
  return total
};


function max(s1, s2) {
  let length = s1.length
  for(let i = 0; i < length; i++) {
    if(s1[i] < s2[i]) {
      return s2
    }
  }
  return s1
}

console.log(max('1233345', '123334'))

largestNumber([1,2,3,45,4,4,4])