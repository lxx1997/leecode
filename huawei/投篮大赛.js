const basketball = (arr) => {
  const score = []
  let currentIndex = -1
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === "D") {
      score[++currentIndex] = score[currentIndex - 1] * 2
    } else if(arr[i] === "+") {
      score[++currentIndex] = score[currentIndex - 1] + score[currentIndex - 2]
    } else if(arr[i] === "C") {
      score.length = currentIndex
      currentIndex--
    } else {
      score[++currentIndex] = +arr[i]
    }
  }
  console.log(score)
  return score.reduce((t, i) => t += i, 0)
}

console.log(basketball([5, 2, "C", "D", "+"]))