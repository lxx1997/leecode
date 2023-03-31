const func = (arr) => {
  let m = arr.length, n = arr[0].length
  let visited = new Array(m + 2).fill(0).map(() => new Array(n + 2).fill(0))
  let newArr = [new Array(n + 2).fill(-2), ...arr.map(item => [-2, ...item, -2]), new Array(n + 2).fill(-2)]
  const dfs = (i , j) => {
    if(visited[i][j]) {
      return
    } else {
      visited[i][j] = 1
      if(Math.abs(newArr[i - 1][j] - newArr[i][j]) <= 1) {
        dfs(i - 1, j)
      }
      if(Math.abs(newArr[i + 1][j] - newArr[i][j]) <= 1) {
        dfs(i + 1, j)
      }
      if(Math.abs(newArr[i][j - 1] - newArr[i][j]) <= 1) {
        dfs(i, j - 1)
      }
      if(Math.abs(newArr[i][j + 1] - newArr[i][j]) <= 1) {
        dfs(i, j + 1)
      }
    }
  }
  dfs(1, 1)
  return visited.flat(2).filter(i => i).length
}

console.log(func([
  [1,2,3,4,5],
  [2,4,5,6,4],
  [3,8,9,4,3],
  [5,4,5,6,4]
]))