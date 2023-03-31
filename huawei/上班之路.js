const func = (turn, del, arr) => {
  let m = arr.length, n = arr[0].length
  let visited = new Array(m + 2).fill(0).map(() => new Array(n + 2).fill(0))
  let newArr = [new Array(n + 2).fill(0), ...arr.map(item => [0, ...item, 0]), new Array(n + 2).fill(0)]
  let start = []
  let end = []
  for(let i = 0; i < m + 2; i++) {
    for(let j = 0; j < n + 2; j++) {
      if(newArr[i][j] === "S") {
        start = [i,j]
      } else if(newArr[i][j] === "T") {
        end = [i, j]
      }
    }
  }
  // i, j 当前位置， t 剩余转弯数，d 剩余删除路障数， arraw 方向 1 上,2 下, 3 左,4 右
  const dfs = (i , j, t, d, arraw) => {
    console.log(newArr[i][j], visited[i][j], d, t, arraw)
    if(!newArr[i][j] || visited[i][j] || d < 0 || t < 0) {
      return false
    } else if(newArr[i][j] === "T") {
      return true
    } else if(newArr[i][j] === "*") {
      if(!d) return false
      visited[i][j] = 1
      let res = dfs(i-1, j, arraw === 3 ? t : t - 1, d - 1, 3) || dfs(i + 1, j, arraw === 4 ? t : t - 1, d - 1, 4) || dfs(i, j + 1, arraw === 1 ? t : t - 1, d - 1, 1) || dfs(i, j - 1, arraw === 2 ? t : t - 1, d - 1, 2)
      if(res) return true
      visited[i][j] = 0
      return false
    } else if(newArr[i][j] === ".") {
      visited[i][j] = 1
      let res = dfs(i-1, j, arraw === 3 ? t : t - 1, d, 3) || dfs(i + 1, j, arraw === 4 ? t : t - 1, d, 4) || dfs(i, j + 1, arraw === 1 ? t : t - 1, d, 1) || dfs(i, j - 1, arraw === 2 ? t : t - 1, d, 2)
      if(res) return true
      visited[i][j] = 0
      return false
    }
  }
  visited[start[0]][start[1]] = 1
  let res = dfs(start[0], start[1] + 1, turn, del, 1) || dfs(start[0], start[1] - 1, turn, del, 2) || dfs(start[0] - 1, start[1], turn, del, 3) || dfs(start[0] + 1, start[1], turn, del, 4)
  return res ? "yes" : "no"
}

console.log(func(2,1, [
  [".", ".", "S", ".", "."],
  ["*", "*", "*", "*", "*"],
  ["T", ".", ".", ".", "."],
  ["*", "*", "*", "*", "."],
  [".", ".", ".", ".", "."],
]))