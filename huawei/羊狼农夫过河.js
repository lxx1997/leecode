/**
 * 
 * @param {*} m 
 * @param {*} n 
 * @param {*} x 
 * @returns 
 * @description: 狼羊过河思路处理：
 * 主要是使用递归的方式，找出每一种运羊狼过河的最终次数，然后取最小值。其中最重要的一点就是如何进行递归和终止递归
 * 终止递归的方式有两种，一种是剩余的狼和羊的个数符合标准，且和小于船的容量
 * 另一种是剩余的 狼和羊的个数不支持我们进个数
 * 如何判断时是否支持运过河呢： 首先剩余的岸边的羊或者狼的数目为零或者羊大于狼的个数，以及对岸同理
 * 最后，获取到递归传过来的每种变量的最终值，由于我们的number是一层层的往下迭代的，所以最后能获取到最新的次糊数
 */

const cowAndWolfCrossDriver = (m, n, x) => {
  // 如果要保证次数最小，说明尽量使每次都运满
  let min_times = Infinity
  let dfs = (m0, n0, x, m1, n1, number) => {
    if(m0 + n0 <= x) {
      min_times = Math.min(min_times, number + 1)
      return number + 1
    }
    for(let i = 0; i <= m0 && i <= x; i++) {
      for(let j = 0; j <= n0 && i + j <= x; j++) {
        if(i + j === 0) {
          continue
        }
        if((m0-i === 0 || n0 - j === 0 || m0 - i > n0 - j) && ( m1+i === 0 || n0 + j === 0 || m1 + i > n1 + j)) {
          let result = dfs(m0-i, n0 - j,x, m1 + i, n1 + j, number + 1)
          if(result) {
            min_times = Math.min(result, min_times)
          }
        }
      }
    }
    return 0
  }
  dfs(m, n, x, 0, 0, 0)
  if(min_times === Infinity) {
    return 0
  } else {
    return min_times
  }
}

console.log(cowAndWolfCrossDriver(7, 4, 3))
console.log(cowAndWolfCrossDriver(4, 3, 4))