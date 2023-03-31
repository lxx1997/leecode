const func = (arr,x, y) => {
  let tree = [[arr[0][0]]]
  let bfs = (indexArr, deep) => {
    let array = []
    tree[deep] = []
    for(let i = 0; i < indexArr.length; i++) {
      let item = arr[indexArr[i]]
      tree[deep].push(item[0])
      if(item[1]) array.push(item[1])
      if(item[2]) array.push(item[2])
    }
    if(array.length) {
      bfs(array, deep + 1)
    }
  }
  bfs([arr[0][1], arr[0][2]], 1)
  return tree[x][y]
}

console.log(func([[10,1,2], [-21,3,4],[23,5],[14],[35],[66]], 2,1))