const func = (n, versions) => {
  let used = new Array(n).fill(0)
  let max = 0
  const bfs = (nodes, num) => {
    let links = []
    for(let i = 0; i < nodes.length; i++) {
      for(let j = 0; j < n; j++) {
        if(!used[j] && versions[nodes[i]][j]) {
          links.push(j)
          used[j] = 1
        }
      }
    }
    console.log(links)
    if(links.length) {
      num = bfs(links, num + links.length)
    }

    return num
  }
  for(let i = 0 ; i < n ; i++) {
    if(!used[i]) {
      used[i] = 1
      let res = bfs([i], 1)
      max = Math.max(res, max)
    }
  }
  return max
}

console.log(func(4, [
  [1,1,0,0],
  [1,1,1,0],
  [0,1,1,0],
  [0,0,0,1]
]))