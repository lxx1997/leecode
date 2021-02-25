// 766. 托普利茨矩阵
// 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
// 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  let matrixL = matrix.length
  let matrixR = matrix[0].length
  if(matrixR === 1) {
      return true
  }
  let i = 0
  while(i < matrixR) {
    let j = i
    let r = 0
    while(j < matrixR && r < matrixL) {
      if(matrix[r][j] !== matrix[0][i]) {
        return false
      }
      r++
      j++
    }
    i++
  }
  let j = 1
  while(j < matrixL) {
    let jr = j
    let r = 0
    while(jr < matrixL && r < matrixR) {
      if(matrix[jr][r] !== matrix[j][0]) {
        return false
      }
      r++
      jr++
    }
    j++
  }
  return true
};
console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]), 'equal true')
console.log(isToeplitzMatrix([[1,2],[2,2]]), 'equal false')
console.log(isToeplitzMatrix([[1,2],[2,1]]), 'equal true')
console.log(isToeplitzMatrix([[57,54],[84,57]]), 'equal true')
console.log(isToeplitzMatrix([[0,1],[1,1],[1,1],[1,1],[1,1],[0,1]]), 'equal false')
console.log(isToeplitzMatrix([[41,45],[81,41],[73,81],[47,73],[76,47],[79,76]]), 'equal true')

