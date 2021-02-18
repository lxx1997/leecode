// 448. 找到所有数组中消失的数字
// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

var findDisappearedNumbers = function(nums) {
  let obj = {}
  let length = nums.length
  for(let i = 0; i < length; i++) {
    obj[nums[i]] = 1
  }
  let unExit = []
  for(let i = 1; i <= length; i++) {
    if(!obj[i]) unExit.push(i)
  }
  return unExit
};

// var findDisappearedNumbers = function(nums) {
//   let unExit = [], max = 1
//   nums = nums.sort((a,b) => a - b)
//   let length = nums.length
//   for(let i = 0; i < length; i++) {
//     if(max < nums[i]) {
//       unExit.push(max)
//       i--
//       max++
//     } else if(max === nums[i]) {
//       max++
//     }
//   }
//   while(max <= length) {
//     unExit.push(max)
//     max++
//   }
//   return unExit
// };

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([10,2,5,10,9,1,1,4,3,7]))