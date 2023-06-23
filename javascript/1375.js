/**
 * @param {number[]} flips
 * @return {number}
 */
 var numTimesAllBlue = function(flips) {
  let arr = new Array(flips.length).fill(0)
  const check = (ar, i) => {
    for(let j = 0; j <= i; j++) {
      if(ar[j] === 0) return false
    }
    return true
  }
  let num = 0
  for(let i = 0; i < flips.length; i++) {
    arr[flips[i] - 1] = 1
    if(check(arr, i)) {
      num++
    }
  }
  return num
}