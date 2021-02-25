// 697. 数组的度
// 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。

// 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
// var findShortestSubArray = function(nums) {
//   let startMap = {}
//   let endMap = {}
//   let lengthMap = {}
//   for(let [key, value] of nums.entries()) {
//     if(!startMap[value] && startMap[value] !== 0) startMap[value] = key
//     endMap[value] = key
//     if(!lengthMap[value]) lengthMap[value] = 0
//     lengthMap[value]++
//   }
//   let max = 0, min = Infinity
//   for(let key in lengthMap) {
//     if(lengthMap[key] > max) {
//       min = endMap[key] - startMap[key] + 1
//       max = lengthMap[key]
//     } else if (lengthMap[key] === max) {
//       min = Math.min(min, endMap[key] - startMap[key] + 1)
//     }
//   }
//   return min
// };

// hashMap
var findShortestSubArray = function(nums) {
  let hashMap = {} // 个数，开始位置，结束位置
  for(let [key, value] of nums.entries()) {
    if(!hashMap[value]) {
      hashMap[value] = [1,key, key]
    } else {
      hashMap[value][0]++
      hashMap[value][2] = key
    }
  }
  let max = 0, min = Infinity
  for(let key in hashMap) {
    if(hashMap[key][0] > max) {
      min = hashMap[key][2] - hashMap[key][1] + 1
      max = hashMap[key][0]
    } else if (hashMap[key][0] === max) {
      min = Math.min(hashMap[key][2] - hashMap[key][1] + 1, min)
    }
  }
  return min
};

console.log(findShortestSubArray([1,2,2,3,1]))