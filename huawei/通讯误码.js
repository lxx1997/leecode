const communityErrorTimes = (arr) => {
  let arrHash = {}
  for(let i = 0; i < arr.length; i++) {
    if(!arrHash[arr[i]]) {
      arrHash[arr[i]] = 1
    } else {
      arrHash[arr[i]]++
    }
  }
  let maxArr = Object.keys(arrHash).map(item => [item, arrHash[item]]).sort((a, b) => b[1] - a[1])
  let maxLengthCode = maxArr[0][1]
  maxArr = maxArr.filter(item => item[1] === maxLengthCode)
  let minLength = Infinity
  for(let i = 0; i < maxArr.length; i++) {
    let start = arr.indexOf(+maxArr[i][0])
    let end = arr.lastIndexOf(+maxArr[i][0])
    minLength = Math.min( end - start + 1, minLength)
  }
  return minLength
}

console.log(communityErrorTimes([1,2,2,4,1]))