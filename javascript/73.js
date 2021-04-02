// 73. 矩阵置零
// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
// 进阶：
// 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个仅使用常量空间的解决方案吗？

var setZeroes = function(matrix) {
  let row = matrix[0].length
  let col = matrix.length
  let arr = []
  for(let i = 0; i < col; i++) {
    let flag = false
    for(let j = 0; j < row; j++) {
      if(matrix[i][j] === 0) {
        arr.push(j)
        flag = true
      }
      if(arr.includes(j)) {
        for(let k = 0; k <= i; k++) {
          matrix[k][j] = 0
        }
      }
    }
    if(flag) matrix[i] = new Array(row).fill(0)
  }
  return matrix
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))