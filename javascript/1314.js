// 1314. 矩阵区域和

// 给你一个 m * n 的矩阵 mat 和一个整数 K ，请你返回一个矩阵 answer ，其中每个 answer[i][j] 是所有满足下述条件的元素 mat[r][c] 的和： 
// i - K <= r <= i + K, j - K <= c <= j + K 
// (r, c) 在矩阵内。

var matrixBlockSum = function(mat, K) {
  let m = mat.length, n = mat[0].length
  let sum = 0
  for(let i = 0; i < k; i++) {
    for(let j = 0; j < k; j++) {
      sum += mat[i][j]
    }
  }
  let newMat = []
  for(let i = 0; i < m; i++) {
    newMat[0] = []
    for(let j = 0; j < n; j++) {
      sum += mat[i][j]
    }
  }
};