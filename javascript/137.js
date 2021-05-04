// 137. 只出现一次的数字 II
// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let arr = {}
  let num = 0
  for(let i = 0; i < nums.length; i++) {
    if(!arr[nums[i]]) arr[nums[i]] = 0
    arr[nums[i]]++
  }
  Object.keys(arr).map(item => {
    if(arr[item] === 1) num = item
    return item
  })
  return num
};

console.log(singleNumber([2,2,3,2]), 3)
console.log(singleNumber([0,1,0,1,0,1,99]), 99)