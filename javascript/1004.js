// 1004. 最大连续1的个数 III
// 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
// 返回仅包含 1 的最长（连续）子数组的长度
var longestOnes = function(A, K) {
  let max = 0, j = 0
  let left = 0, right = 0
  let length = A.length
  while(right < length) {
    if(A[right] === 0) {
      j++
    }
    while(j > K) {
      if(A[left] === 0) {
        j--
      }
      left++
    }
    right++
    max = Math.max(max, right - left)
  }
  return max
};
// console.log(longestOnes(A = [1,1,1,0,0,0,1,1,1,1,0], K = 2))
// console.log(longestOnes(A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3))
console.log(longestOnes(A = [0,0,0,1], K = 4))