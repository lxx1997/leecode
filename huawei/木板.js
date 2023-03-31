const maxMinLenthBoard = (arr, length) => {
  arr = arr.sort((a,b) => a - b)
  for(let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i-1]
    console.log(arr, length)
    const l = i
    if(length / i >= diff) {
      for(let j = 0; j < i; j++) {
        arr[j] = arr[i]
      }
      length -= diff * i
    }  else {
      const leave = Math.floor(length / i)
      return arr[0] + leave
    }
    if(length === 0) {
      return arr[0]
    }
  }
}

console.log(maxMinLenthBoard([1,8,6,4,5, 10], 20))
console.log(maxMinLenthBoard([1,8,12,4,5, 10], 20))