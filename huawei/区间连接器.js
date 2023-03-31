const func = (arr1, arr2) => {
  arr1 = arr1.sort((a, b) => a[0] - b[0])
  let newArr = [arr1[0]]
  for(let i = 1; i < arr1.length; i++) {
    let last = newArr.pop()
    let now = arr1[i]
    if(last[1] >= now[0]) {
      newArr.push([Math.min(last[0], now[0]), Math.max(last[1], now[1])])
    } else {
      newArr.push(last)
      newArr.push(now)
    }
  }
  arr2 = arr2.sort((a, b) => a - b)
  hasChoose = new Array(arr2.length)
  
  let linkedAr = [newArr[0]]
  for(let i = 1; i < newArr.length; i++) {
    let last = linkedAr.pop()
    let now = newArr[i]
    let diff = last[1] - now[0]
    let flag = false
    for(let j = 0; j < arr2.length; j++) {
      if(arr2[j] >= diff && !hasChoose[j]) {
        linkedAr.push([Math.min(last[0], now[0]), Math.max(last[1], now[1])])
        flag = true
        break;
      }
    }
    if(!flag) {
      linkedAr.push(last)
      linkedAr.push(now)
    }
  }
  return linkedAr.length
}

console.log(func([[1,10],[15,20],[18,30],[33,40]], [5,4,3,2]))