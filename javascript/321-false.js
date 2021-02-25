// 321. 拼接最大数
// 给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。
// 求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。
// give up
var maxNumber = function(nums1, nums2, k) {
  function merge(nums1, nums2) {
    let result = []
    while(nums1.length && nums2.length) {
      if(nums1[0] >= nums2[0]) {
        result.push(nums1.shift())
      } else {
        result.push(nums2.shift())
      }
    }
    while(nums1.length > 0) {
      result.push(nums1.shift())
    }
    while(nums2.length > 0) {
      result.push(nums2.shift())
    }
    return result
  }
  if(k = nums1.length + nums2.length) {
    return merge(nums1, nums2)
  }
  let l1 = nums1.length, l2 = nums2.length
};

// console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5), [9, 8, 6, 5, 3])
console.log(maxNumber([6, 7], [6, 0, 4], 5), [6, 7, 6, 0, 4])
// console.log(maxNumber([3, 9], [8, 9], 3), [9, 8, 9])
// console.log(maxNumber([3,4,6,5], [9,1,2,5,8,3], 8), [9,6,5,1,2,5,8,3])