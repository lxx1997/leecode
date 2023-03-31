const maxColorCarNum = (colors, time) => {
  let colorNum = [0, 0, 0]
  for(let i = 0; i < time; i++) {
    colorNum[colors[i]]++
  }
  let left = 0, right = time - 1
  let max = Math.max(...colorNum)
  while(right < colors.length - 1) {
    colorNum[colors[left]]--
    left++
    right++
    colorNum[colors[right]]++
    max = Math.max(...colorNum)
  }
  return max
}

console.log(maxColorCarNum([0,1,2,1, 1, 1], 3))
console.log(maxColorCarNum([0,1,2,1], 2))