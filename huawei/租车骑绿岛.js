const maxRiderBakes = (maxWeight, number, weights) => {
  let bakeNum = 0
  let left = 0; right = number - 1
  weights = weights.sort((a, b) => b - a)
  while(left <= right) {
    if(left === right) {
      return bakeNum + 1
    }
    if(weights[left] + weights[right] > maxWeight) {
      bakeNum++
      left++
    } else {
      bakeNum++
      left++
      right--
    }
  }
  return bakeNum
}

console.log(maxRiderBakes(3, 4, [3,2,2,1]), 3)