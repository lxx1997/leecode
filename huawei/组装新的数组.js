const func = (arr, m) => {
  arr = arr.sort((a, b) => b - a)
  let num = 0
  let min = arr[arr.length - 1]
  // 剩余个数，当前位置
  const dfs = (remain, i) => {
    if(remain === 0 || remain < min) {
      num++
      return
    }
    if(arr[i] < remain) {
      let count = Math.floor(remain / arr[i])
      for(let j = 1; j <= count; j++) {
        dfs(remain - arr[i] * j, i + 1)
      }
    }
  }
  for(let i = 0; i < arr.length; i++) {
    dfs(m, i)
  }
  return num
}

console.log(func([3,2], 7))