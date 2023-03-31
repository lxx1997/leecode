const func = (arr) => {
  let result = []
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      let d = arr[i] ^ arr[j]
      let s = arr[i] * arr[j]
      if(d > s) {
        result.push([arr[i], arr[j]])
      }
    }
  }
  return result || result.length
}