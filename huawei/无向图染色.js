// const undeirectedGraphDyeing = (graphs, links) => {
//   let hash = new Array(graphs[0]).fill(0).map(item => [])
//   for(let i = 0; i < links.length; i++) {
//     let item = links[i]
//     hash[item[0]].push(item[1])
//     hash[item[1]].push(item[0])
//   }

//   let unlinkedNode = hash.filter(item => item.size === 0).length

//   let max = 0; arr = new Array(graphs).fill(undefined)
//   const computedDyeing = (currentNode, arr) => {
//     let isColor = typeof arr[currentNode] !== "undefined"
//     if(isColor) {
//       // 已着色
//       let color =  arr[currentNode]
//       let link = hash[currentNode]
//       if(color === 0) {
//           link.forEach(item => {
//             if(typeof arr[item] === "undefined") {

//             } else {

//             }
//           })
//       } else {
//         let haRed = link.some(l => arr[l] === 1)
//         if(haRed) return
//         let newArr = [...arr]
//         link.forEach(item => newArr[item] = 0)
//         link.forEach(item => {
//           computedDyeing(item, newArr)
//         })
//       }
//     } else {
//       // 没有着色
//     }
//     if(arr.filter(item => typeof item !=="undefined").length === graphs[0] - unlinkedNode) {
//       max++
//     }
//   }
//   return max
// }
// 暴力的方法
const undeirectedGraphDyeing = (graphs, links) => {
  let m = graphs[0], n = graphs[1]
  let arr = new Map()
  for(let i = 0; i < links.length; i++) {
    let item = links[i]
    if(arr.get(item[0])) {
      arr.set(item[0], [...arr.get(item[0]), item[1]])
    } else {
      arr.set(item[0], [item[1]])
    }
    if(arr.get(item[1])) {
      arr.set(item[1], [...arr.get(item[1]), item[0]])
    } else {
      arr.set(item[1], [item[0]])
    }
  }
  let num = 0
  // 父节点 需要进行染色的 node， 节点染色情况，已经染色的节点
  const bfs = (before, nodes, painted, used) => {
    let parent = 1 << before
    
    if((parent & painted) === parent) {
      // 父节点红色,则子节点必定全为黑色
      for(let i = 0; i < nodes.length; i++) {
        used |= 1 << nodes[i]
      }
      for(let i = 0; i < nodes.length; i++) {
        let node = arr.get(nodes[i])
        node = node.filter(item => {
          let p = 1 << item
          return (used & p) !== p
        })
        if(node.length > 0) {
          bfs(nodes[i], node, painted, used)
        }
      }
    } else {
      for(let i = 0; i < nodes.length; i++) {
        used |= 1 << nodes[i]
      }
      for(let i = 0; i < nodes.length; i++) {
        let paint = painted
        for(let j = i; j < nodes.length; j++) {
          paint |= 1 << nodes[j]
          let node = arr.get(nodes[j])
          node = node.filter(item => {
            let p = 1 << item
            return (used & p) !== p
          })
          if(node.length > 0) {
            // 走全红的逻辑
            bfs(nodes[j], node, paint, used)
          }
        }
        let node = arr.get(nodes[i])
        node = node.filter(item => {
          let p = 1 << item
          return (used & p) !== p
        })
        // 走全黑的逻辑
        if(node.length) {
          bfs(nodes[i], node, painted, used)
        }
      }
    }
    console.log(used.toString(2), painted.toString(2), used | 1)
    if(used === ((1 << (m + 1)) - 1) && (used | 1) === used) {
      num++
    }
  }
  // 顶绘制黑
  bfs(1, arr.get(1), 1, 3)
  // 顶绘制红
  bfs(1, arr.get(1), 3, 3)
  return num
}

console.log(undeirectedGraphDyeing([6,6], [
  [1,2],[2,4],[3,4],[1,3],[4,5],[5,6]
]), 7)