const dateRecord = (arr) => {
  let max = 0
  let current = 0
  for(let i = 0; i < arr.length; i++) {
     current += arr[i]
     let del = 0 // 需要扣除的分
     for(let j = 0; j < i; j++) {
      del += arr[j] * (i - j)
     }
     max = Math.max((current > 100 ? 100 : current) - del, max)
     if(current >= 100) {
      return max
     }
  }
  return max
}

console.log(dateRecord([20,40,30,40]))
console.log(dateRecord([50, 60, 1]))
console.log(dateRecord([1,2,97]))