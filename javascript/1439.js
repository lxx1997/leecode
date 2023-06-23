/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(mat, k) {
  let sumArr = [0]
  for(let row = 0; row < mat.length; row++) {
    let next = []
    for(let sumIndex = 0; sumIndex < sumArr.length; sumIndex++) {
      for(let col = 0; col < mat[0].length; col++) {
        next.push(sumArr[sumIndex] + mat[row][col])
      }
    }
    // 为了避免数组过长，毕竟我们只需要最小的数据
    sumArr = next.sort((a, b) => a - b).slice(0, k)
  }
  return sumArr[k-1]
};