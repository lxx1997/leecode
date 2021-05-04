// 554. 砖墙
// 你的面前有一堵矩形的、由 n 行砖块组成的砖墙。这些砖块高度相同（也就是一个单位高）但是宽度不同。每一行砖块的宽度之和应该相等。

// 你现在要画一条 自顶向下 的、穿过 最少 砖块的垂线。如果你画的线只是从砖块的边缘经过，就不算穿过这块砖。你不能沿着墙的两个垂直边缘之一画线，这样显然是没有穿过一块砖的。

// 给你一个二维数组 wall ，该数组包含这堵墙的相关信息。其中，wall[i] 是一个代表从左至右每块砖的宽度的数组。你需要找出怎样画才能使这条线 穿过的砖块数量最少 ，并且返回 穿过的砖块数量 。
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  let length = wall.length, hash = {}
  for(let i = 0; i < length; i++) {
    let wallLenght = wall[i].length
    if(wallLenght !== 1) {
      if(hash[wall[i][0]]) hash[wall[i][0]]++
      else hash[wall[i][0]] = 1
    }
    for(let j = 1; j < wallLenght - 1; j++) {
      wall[i][j] += wall[i][j-1]
      if(hash[wall[i][j]]) hash[wall[i][j]]++
      else hash[wall[i][j]] = 1
    }
  }
  let min = length
  Object.values(hash).map((value) => {
    min = Math.min(min, length - value)
  })
  return min
};

console.log(leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]), 2)
console.log(leastBricks([[1],[1],[1]]), 3)
console.log(leastBricks([[7,1,1,1],[1,4,2,3],[7,3]]), 0)
