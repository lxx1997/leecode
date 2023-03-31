const workPlacement = (total, workNum, arr) => {
    arr = arr.sort((a, b) => a[1]/a[0] === b[1]/b[0] ? a[0] - b[0] : a[1]/a[0] - b[1]/b[0])
    console.log(arr)
    let price = 0
    for(let i = arr.length - 1; i > 0; i--) {
      let work = arr[i]
      if(total >= work[0]) {
        total -= work[0]
        price += work[1]
      }
      if(total === 0) {
        return price
      }
    }
    console.log(total)
    return price
}

console.log(workPlacement(40, 3, [[20,10], [20, 20], [20, 5], [40, 40]]))
console.log(workPlacement(40, 3, [[20,10], [20, 20], [20, 5]]))