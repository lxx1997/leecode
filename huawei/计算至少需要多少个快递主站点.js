const minNumberPost = (arr) => {
  let n = arr.length
  let hash = new Array(n).fill(0)
  const dfs = (i) => {
    for(let j = 0; j < n ;j++) {
      if(!hash[j]) {
        dfs(j)
        hash[j] = 1
      }
    }
  }
  let num = 0
  for(let j = 0; j < n ;j++) {
    if(!hash[j]) {
      dfs(j)
      hash[j] = 1
      num += 1
    }
  }
  return num
}