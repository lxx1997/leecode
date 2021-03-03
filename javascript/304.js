// 304. 二维区域和检索 - 矩阵不可变
// 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
// 上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。
var NumMatrix = function(matrix) {
  this.sumArray = []
  let row = matrix[0].length
  let col = matrix.length
  this.sumArray.push(new Array(row + 1).fill(0))
  for(let i = 1; i <= col; i++) {
    this.sumArray[i] = [0]
    for(let j = 1; j <= row; j++) {
      if(i === 1) this.sumArray[i][j] = this.sumArray[i][j-1] + matrix[i-1][j-1]
      else this.sumArray[i][j] = this.sumArray[i][j-1] + this.sumArray[i - 1][j] + matrix[i-1][j-1] - this.sumArray[i - 1][j - 1]
    }
  }
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  row1++
  col1++
  row2++
  col2++
  return this.sumArray[row2][col2] - this.sumArray[row1 - 1][col2] - this.sumArray[row2][col1 - 1] + this.sumArray[row1-1][col1-1]
};

let num = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
])
console.log(num.sumRegion(2, 1, 4, 3))
console.log(num.sumRegion(1, 1, 2, 2))
console.log(num.sumRegion(1, 2, 2, 4))