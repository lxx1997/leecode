// 119 杨辉三角

// var getRow = function(rowIndex) {
//   let rowCol = rowIndex + 1
//   let row = [[1],[1,1]]
//   let i = 2
//   while(i < rowCol) {
//     row[i] = []
//     let length = i+1
//     let isOdd = (length - 2) % 2 === 1
//     let half = isOdd ? (length- 3)/2 : (length - 2)/2
//     row[i][0] = row[i][length-1] = 1
//     let j = 0
//     while(j <= half) {
//       row[i][j + 1] = row[i][i - j - 1] = row[i-1][j] + row[i-1][j + 1]
//       j++
//     }
//     i++
//   }
//   return row[rowIndex]
// };
/**
 * 获取杨辉三角的指定行
 * 直接使用组合公式C(n,i) = n!/(i!*(n-i)!)
 * 则第(i+1)项是第i项的倍数=(n-i)/(i+1);
 * 
 * 第 n 行  数组长度为 n+1
 * 第 i 个元素 为 第 i-1 个元素 的 (n+1-i)/i 倍
 * row[i]
 */
var getRow = function(rowIndex) {
  let rowCol = rowIndex + 1
  let j = 1
  let row = [1]
  while(j < rowCol) {
    row[j] = (rowCol - j)/(j) * row[j-1] 
    j++
  }
  return row
};
console.log(getRow(8))