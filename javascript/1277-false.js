// 1277. 统计全为 1 的正方形子矩阵

// 给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。
var countSquares = function(matrix) {
  let total = 0
  let length = matrix.length, length2 = matrix[0].length
  let maxLength = Math.min(length, length2)
  let maxArray = new Array(maxLength).fill(0)
  for(let i = 0; i < length; i++) {
    for(let j = 0;j < length2; j++) {
      let k = 0
      while(k < maxLength && k < j) {

      }
    }
  }
};