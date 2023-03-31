const baseWorkerProfess = (arr) => {
  let baseNum = arr.length
  let total = Infinity
  // 第几位 i，已经走过了几个站 use, 总路程
  let dfs = (i, use, t) => {
    if(use !== 1 && use | 1 === use) {
      t = t + arr[i][0]
      total = Math.min(total, t)
    }
    for(let j = 0; j < baseNum; j++) {
      // 没有被用过
      let used = 1 << j
      console.log(used, use, used & use)
      if( (used & use) !== used) {
        dfs(j, use | used, t + arr[j][i])
      }
    }
  }
  dfs(0, 1, 0)
  return total
}

console.log(baseWorkerProfess([
  [0,2,1],
  [1,0,2],
  [2,1,0]
]))