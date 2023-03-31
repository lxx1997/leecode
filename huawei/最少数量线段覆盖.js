const minNumber = (arr) => {
  arr = arr.sort((a, b) => a[0] - b[0])
  let end = arr[0][1], num = 1
  let max = -Infinity
  for(let i = 1; i < arr.length; i++) {
    let temp = end
    max = Math.max(max, arr[i][1])
    for(let j = i; j < arr.length; j++) {
      if(arr[j][0] > end) {
        break;
      } else {
        temp = Math.max(temp, arr[j][1])
      }
    }
    if(temp !== end) {
      num++
      end = temp
    }
  }
  return num
}

console.log(minNumber([[1,4],[2,5],[3,6],[5,7]]))