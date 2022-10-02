/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  let m = matrix.length, n = matrix[0].length
  let arr = new Array(m).fill(1).map(item => new Array(n).fill(1));
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      let item = matrix[i][j]
      if(item === 0) {
        arr[i] = new Array(n).fill(0)
        for(let k = 0; k < m; k++) {
          arr[k][j] = 0
        }
      } else {
        if(arr[i][j]) {
          arr[i][j] = item
        }
      }
    }
  }
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      matrix[i][j] = arr[i][j]
    }
  }
}