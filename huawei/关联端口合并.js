const mergeCommPost = (arr) => {
  arr = arr.map(item => Array.from(new Set(item)).sort((a, b) => a - b))
  let list = [arr[0]]

  const checkNeedMerge = (arr1, arr2) => {
    if(arr1.length <= 1 || arr2.length <= 1) return false
    let same = 0
    for(let i = 0; i < arr1.length; i++) {
      for(let j = 0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]) {
          same++
        }
      }
    }
    if(same >= 2) return true
    return false
  }
  for(let i = 1; i < arr.length; i++) {
    let checked = false
    let compare = arr[i]
    while(compare) {
      let hasCompare = false
      for(let j = 0; j < list.length; j++) {
        if( !hasCompare && compare !== list[j] && checkNeedMerge(compare, list[j])) {
          let item = Array.from(new Set([...list[j], ...compare]))
          list[j] = item
          let index = list.indexOf(compare)
          if(index !== -1) {
            list.splice(index, 1)
          }
          compare = item
          hasCompare = true
          checked = true
          break
        }
      }
      if(!hasCompare) {
        compare = undefined
      }
    }
    if(!checked) {
      list.push(arr[i])
    }
  }
  return list
}

console.log(mergeCommPost([
  [4],
  [2,3,2],
  [1,2],
  [5]
]), [[4],[2,3],[1,2],[5]])
console.log(mergeCommPost([
  [1,2,3],
  [4,3,2],
  [5]
]), [[1,2,3,4],[5]])
console.log(mergeCommPost([
  [10],
  [1,2,4],
  [9],
  [3,6,9,2],
  [4,3,6],
  [8]
]), [[10],[1,2,3,4,6,9],[9],[8]])