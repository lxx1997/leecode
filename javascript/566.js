// 566. 重塑矩阵

// 在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。
// 给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。
// 重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。
// 如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
var matrixReshape = function(nums, r, c) {
  let l = nums.length
  let lr = nums[0].length
  if(l * lr === r * c) {
    let newArray = [], i = 0
    if(l === 1) {
      let item = nums[0]
      while(i * c + c <= lr) {
        newArray.push(item.slice(i * c,i * c + c))
        i++
      }
    }
    nums.reduce((total, item) => {
      let length = total.push(...item)
      while(i * c + c <= length) {
        newArray.push(total.slice(i * c,i * c + c))
        i++
      }
      return total
    })
    return newArray
  } 
  return nums
};
console.log(matrixReshape([[1,2,3,4]], 2, 2))