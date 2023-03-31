const exchangeOneToZero = (arr) => {
  let m = arr.length
  let n = arr[0].length
  let exchageTimeArr = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let newArr = []
  for(let i = 0; i < m + 2; i++) {
    if(i === 0 || i === n + 1) {
      newArr[i] = new Array(m + 2).fill(0)
    } else {
      newArr[i] = [0, ...arr[i - 1], 0]
    }
  }
  const dfs = (i, j) => {
    exchageTimeArr[i][j] = 1
    for(let k = i - 1; k <= i + 1; k++) {
      for(let l = j - 1; l <= j + 1; l++) {
        if(newArr[k][l] === 1 && !exchageTimeArr[k][l]) {
          dfs(k, l)
        }
      }
    }
  }
  let number = 0
  for(let i = 1; i < m + 1; i++) {
    for(let j = 1; j < n + 1; j++) {
      if(newArr[i][j] === 1 && !exchageTimeArr[i][j]) {
        dfs(i, j)
        number++
      }
    }
  }
  return number
}

console.log(exchangeOneToZero([
  [1,1,0,0],
  [0,0,0,1],
  [0,0,1,1],
  [1,1,1,1]
]), 2)
console.log(exchangeOneToZero([
  [1,1,0,0],
  [0,0,0,1],
  [0,0,1,1],
  [1,0,1,1]
]), 3)
console.log(exchangeOneToZero([
  [1,1,0,0],
  [0,0,0,1],
  [0,0,1,0],
  [1,0,1,1]
]), 3)