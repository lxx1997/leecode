const func = (arr) => {
  let max = [arr[0]]
  let max2 = []
  for(let i = 1; i < arr.length; i++) {
    if(max[i - 1] > arr[i]) {
      max[i] = max[i-1]
    } else {
      max[i] = arr[i]
    }
  }
  for(let j = arr.length - 1; j >= 0; j--) {
    if(j + 1 < arr.length && max2[j + 1] > arr[j]) {
      max2[j] = max2[j + 1]
    } else {
      max2[j] = arr[j]
    }
  }
  let keep = new Array(arr.length).fill(0)
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= Math.min(max[i],max2[i])) {
      keep[i] = 0
    } else {
      keep[i] = Math.min(max[i],max2[i]) - arr[i]
    }
  }
  let total = 0, save = [], maxNum = 0,left = 0, right = 0
  while(left <= right && right < keep.length) {
    if(keep[right] === 0) {
      if(maxNum < total) {
        save = [left, right]
        maxNum = total
        left = right
      } else if(maxNum === total) {
        save = save[1] - save[0] > right - left ? [left, right] : save
      }
      total = 0
    } else {
      total += keep[right]
    }
    right++
  }
  console.log(max, max2, keep)
  return `${save[0]} ${save[1]}:${maxNum}`
}

console.log(func([5,3,8,4,8]))