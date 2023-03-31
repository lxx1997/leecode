const maxSourceMixTask = (tasks) =>{
  let timeSourceList = []
  for(let i = 0; i < tasks.length; i++) {
    let task = tasks[i], start = task[0], end = task[1], source = task[2]
    for(let j = start;j <= end; j++) {
      if(!timeSourceList[j]) {
        timeSourceList[j] = 0
      }
      timeSourceList[j] += source
    }
  }
  return Math.max(...timeSourceList.filter(item => item))
}

console.log(maxSourceMixTask([[2,3,1],[6,9,2],[0,5,1]]), 2)
console.log(maxSourceMixTask([[2,3,1],[6,9,2],[0,6,1]]), 3)
console.log(maxSourceMixTask([[3.9,2],[4,7,3]]), 3)