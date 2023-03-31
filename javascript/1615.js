/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
//  */
// var maximalNetworkRank = function(n, roads) {
//   const connect = new Array(n).fill(0).map(() => new Array(n).fill(false)) // y用来存储 每个城市与其他城市的链接状态
//   const degree = new Array(n).fill(0) // 记录当前城市与几个城市链接
//   for(let i = 0; i < roads.length; i++) {
//     let road = roads[i]
//     // 这里主要是设置对应城市的链接状态和链接个数
//     connect[road[0]][road[1]] = true
//     connect[road[1]][road[0]] = true
//     degree[road[0]]++
//     degree[road[1]]++
//   }
//   let max = 0
//   for(let i = 0; i < n; i++) {
//     for(let j = i + 1; j < n; j++) {
//       // 如果这两个城市之间存在链接，说明有一条路是重复的，因此需要减一
//       let result = degree[i] + degree[j] - (connect[i][j] ? 1 : 0)
//       max = Math.max(max, result)
//     }
//   }
//   return max
// };


var maximalNetworkRank = function(n, roads) {
  const connect = new Array(n).fill(0).map(() => new Set()) // y用来存储 每个城市与其他城市的链接状态
  for(let i = 0; i < roads.length; i++) {
    let road = roads[i]
    // 这里主要是设置对应城市的链接状态和链接个数
    connect[road[0]].add(road[1])
    connect[road[1]].add(road[0])
  }
  let max = 0
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      // 如果这两个城市之间存在链接，说明有一条路是重复的，因此需要减一
      let result = connect[i].size + connect[j].size - (connect[i].has(j) ? 1 : 0)
      max = Math.max(max, result)
    }
  }
  return max
};