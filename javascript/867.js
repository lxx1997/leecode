// 867. 转置矩阵
// 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

// 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
var transpose = function(matrix) {
  let x = matrix.length
  let y = matrix[0].length
  let newMatrix = []
  for(let i = 0; i < y;i++) {
    newMatrix[i] = []
    for(let j = 0; j < x;j++) {
      newMatrix[i].push(matrix[j][i])
    }
  }
  return newMatrix
};

function compare(nums1, nums2) {
  console.log(nums1.toString() === nums2.toString())
}
compare(transpose([[1,2,3],[4,5,6],[7,8,9]]), [[1,4,7],[2,5,8],[3,6,9]])
compare(transpose([[1,2,3],[4,5,6]]), [[1,4],[2,5],[3,6]])